import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, useRef, useState } from "react"
import { checkFileValidation } from "../../src/commons/libraries/utils"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function ImageValidationPage(){
    const fileRef = useRef<HTMLInputElement>(null)

    const [image, setImage] = useState("") // setImage 에러 부분 해결 : <string | undefined> 이렇게도 작성가능
    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">, 
    IMutationUploadFileArgs
    >(UPLOAD_FILE)

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] // 파일이 없는데 [0] 올 수 없기 때문에 ?.을 찍어줘야 한다.
        console.log(file)

        const isValid = checkFileValidation(file)
        if(!isValid) return

        try {
            const result = await uploadFile({ 
                // variables : 어떤 파일을 업로드 할지?
                variables: {
                    file: file // key와 value가 같으므로 file, 숏앤드프로퍼티로 작성 가능
                }
            })
            console.log("result",result.data?.uploadFile.url) // 파일을 스토리지에서 url로 받아오고 그 url이 result에 저장된다!!!!
    
            setImage(result.data?.uploadFile.url || "") // 이미지가 스트링타입으로 추론이 되었는데 없을 수도 있기때문에 빈문자열로 보여줘! 
        } catch (error: any) {
            alert(error.message);
        }
    }

    const onClickImage = () => {
        fileRef.current?.click(); // 이미지를 클릭했지만 fileRef가 클릭되게끔 해야하기 때문에 fileRef를 쓴다.
    }

    // const myStyle = {
    //     display: "none"
    // } 
    //  ==> style={{display: "none"}} 과 같은 기능 그래서 중괄호가 두개이다.
    return (
        <div>
            <div style={{width: '50px', height:"50px", backgroundColor: "gray"}}
                 onClick={onClickImage}
            >
                이미지 선택
            </div>
            <img src={`https:/storage.googleapis.com/${image}`}/>
            {/* // 여러파일을 동시에 드래그해서 업로드 하고 싶을 땐 multiple */}
            <input style={{display: "none"}} type="file" ref={fileRef} onChange={onChangeFile}/>
        </div>
    )
}