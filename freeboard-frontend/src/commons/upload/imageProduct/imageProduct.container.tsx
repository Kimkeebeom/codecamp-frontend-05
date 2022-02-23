import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useRef, useState } from "react"
import * as S from "./imageProduct.styles"
import { IMutation, IMutationUploadFileArgs } from "../../types/generated/types"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function ImageProductWrite(){
    const fileRef = useRef<HTMLInputElement>(null)
    const [images, setImages] = useState(["","",""])
    const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
    >(UPLOAD_FILE)

    // useState 배열에 여러장의 사진을 for문을 이용해서 등록되게끔 하고 싶다~~
    // for(let i=0; i<useState.length; i++){
    //     if(useState.length < 12){

    //     }
    // }

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log(file)
        try {
            const result = await uploadFile({
                variables: {
                    file: file
                }
            })
            console.log("result:", result.data.uploadFile.url)
            setImages([result.data.uploadFile.url])
            // setImages(prev => [result.data.uploadFile.url, ...prev])
            // setImages(images)
            
        } catch (error) {
            Modal.error({content: error.message})
        }
    }
    console.log(images)
    const onClickImage = () => {
        fileRef.current?.click(); // 이미지를 클릭했지만 fileRef가 
                                  // 클릭되게끔 해야하기 때문에 fileRef를 쓴다.
    }

    return(
        <>
        {images ? (
          <S.ImageUpload
            onClick={onClickImage}
            src={`https://storage.googleapis.com/${images}`}
            
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