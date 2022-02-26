import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
        }
    }
`

export default function ImageUploadSubmitPage(){
    const [file1, setFile1] = useState<File>()
    const [imageUrl, setImageUrl] = useState("")
    const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>, 
    IMutationUploadFileArgs
    >(UPLOAD_FILE)

    const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
    >(CREATE_BOARD)

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log(file)

        if(!file) {
            alert("파일이 없습니다!")
            return
        }
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (data) => {
            // 👇 data.target?.result의 타입이 string이라면 중괄호 안의 코드를 실행해줘
            if(typeof data.target?.result === "string"){ 
                console.log(data.target?.result)
                setImageUrl(data.target?.result || "")
                setFile1(file)
            }
        }
    }
    // 이러한 함수를 eventHandler 함수라고 함(복습하기ㅋ)
    const onClickSubmit = async () => {
        // 1. image 업로드해서 url 받아오기
        //    - uploadFile()
        const result = await uploadFile({
            variables:{
                file: file1
            }
        })
        const imageUrl = result.data?.uploadFile.url || ""
        // 2. createBoard로 게시물 등록하기
        //    - writer, title, contents 하드코딩해서 전송
        //    - imageurl 전송
        const result2 = await createBoard({
            variables:{
                createBoardInput: {
                    writer: "여응히이",
                    password: "1234",
                    title: "와싸랍",
                    contents: "종간나 이미지 업로드입니다@@",
                    images: [imageUrl]
                }
            }
        })
        console.log(result2.data?.createBoard._id)
    }

    return(
        <div>
            <img src={imageUrl} />
            <input type="file" onChange={onChangeFile}/>
            <button onClick={onClickSubmit}>등록하기</button>
        </div>
    )
}