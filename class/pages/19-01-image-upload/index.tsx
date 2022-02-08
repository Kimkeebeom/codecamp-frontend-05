import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function ImageUploadPage(){
    const [image, setImage] = useState("") // setImage 에러 부분 해결 : <string | undefined> 이렇게도 작성가능
    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">, 
    IMutationUploadFileArgs
    >(UPLOAD_FILE)

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] // 파일이 없는데 [0] 올 수 없기 때문에 ?.을 찍어줘야 한다.
        console.log(file)

        try {
            const result = await uploadFile({
                // variables : 어떤 파일을 업로드 할지?
                variables: {
                    file: file // key와 value가 같으므로 file, 숏앤드프로퍼티로 작성 가능
                }
            })
            console.log(result.data?.uploadFile.url)
    
            setImage(result.data?.uploadFile.url || "") // 이미지가 스트링타입으로 추론이 되었는데 없을 수도 있기때문에 빈문자열로 보여줘! 
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div>
             {/* // 여러파일을 동시에 드래그해서 업로드 하고 싶을 땐 multiple */}
            <input type="file" onChange={onChangeFile} multiple/>
            <img src={`https:/storage.googleapis.com/${image}`}/>
        </div>
    )
}