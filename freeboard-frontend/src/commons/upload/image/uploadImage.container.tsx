import { useMutation } from "@apollo/client"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { checkFileValidation } from "../../libraries/validation/utils"
import { IMutation, IMutationUploadFileArgs } from "../../types/generated/types"
import { UPLOAD_FILE } from "./uploadImage.queries"
import * as S from "./uploadImage.styles"

export default function UploadImage(props){
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
        if(!isValid) return // validation 컴포넌트에서 어느 함수라도 false로 리턴(반환)되면 종료

        try {
            const result = await uploadFile({ 
                variables: {file: file}
            })
            console.log("result",result.data?.uploadFile.url) // 파일을 스토리지에서 url로 받아오고 그 url이 result에 저장된다!!!!
            setImage(result.data?.uploadFile.url)
            // props.onChangeFileUrls(result.data?.uploadFile.url, props.index) // 이미지가 스트링타입으로 추론이 되었는데 없을 수도 있기때문에 빈문자열로 보여줘! 
        } catch (error: any) {
            alert(error.message);
        }
        console.log("하ㅡㅡ이미지 왜안보이니")
        console.log('123',image)
    }

    const onClickImage = () => {
        fileRef.current?.click(); // 이미지를 클릭했지만 fileRef가 클릭되게끔 해야하기 때문에 fileRef를 쓴다.
    }   

    return (
        <>
        {image ? (
          <S.ImageUpload
            onClick={onClickImage}
            src={`https://storage.googleapis.com/${image}`}
          />
        ) : (
          <S.UploadImage onClick={onClickImage}>
            <>+</>
            <>Upload</>
          </S.UploadImage>
        )}
        <S.HiddenUploadFile
          type="file"
          ref={fileRef}
          onChange={onChangeFile}
        />
      </>
    )
}