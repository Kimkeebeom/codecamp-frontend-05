import { useMutation } from "@apollo/client"
import { Modal } from "antd"
import { Router, useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types"
import ProductWriteUI from "./ProductWrite.presenter"
import { CREATE_USED_ITEM } from "./ProductWrite.queries"
// import ImageProductWrite from "../../../../commons/upload/imageProduct/imageProduct.container"
// import { v4 as uuidv4 } from "uuid"
// import { useForm } from "react-hook-form"

// interface IFormdata{
//     name?: string,
//     remarks?: string,
//     price?: number,
//     contents?: string,
//     images?: any
// }

export default function ProductWrite(props){
    // const { register, handleSubmit, setValue } = useForm({
    //     mode:'onChange'
    // })
    const router = useRouter()
    const [createUseditem] = useMutation<
    Pick<IMutation, 'createUseditem'>,
    IMutationCreateUseditemArgs
    >(CREATE_USED_ITEM)

    const [name, setName] = useState("")
    const [remarks, setRemarks] = useState("")
    const [price, setPrice] = useState(0)
    const [contents, setContents] = useState("")
    const [images, setImages] = useState(["","",""])

    function productWriter(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function productTitle(event: ChangeEvent<HTMLInputElement>){
        setRemarks(event.target.value)
    }

    function productPrice(event: ChangeEvent<HTMLInputElement>){
        setPrice(event.target.valueAsNumber)
    }

    function productContents(event: ChangeEvent<HTMLInputElement>){
        setContents(event.target.value)
    }

    // function onChangeImages(image: string, index: number){
    //     const newImages = [...images];
    //     newImages[index] = image;
    //     setImages(newImages)
    //     console.log("images:", newImages)
    // }

    // function onChangeImages(value: string){
    //     setValue("images", value === setImages(images) ? value : "")
    // }

    const onClickSubmit = async () => {
        if(!(name && remarks && price && contents)){
            Modal.warn({content: "필수 입력 사항입니다!"})
            return
          }
        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput:{
                        name: name,
                        remarks: remarks,
                        price: Number(price),
                        contents: contents,
                        images: images
                    }
                }
            })
            console.log("result:", result)
            Modal.success({content:"상품이 성공적으로 등록되었습니다"})
            router.push(`/product/${result.data.createUseditem._id}`)
        } catch (error) {
            Modal.error({content:error.message})
        }
        // console.log(data)
        // setValue("images", value === "url" ? "": value)
    }

    return(
        <ProductWriteUI
            productWriter={productWriter}
            productTitle={productTitle}
            productPrice={productPrice}
            productContents={productContents}
            // onChangeImages={onChangeImages}
            onClickSubmit={onClickSubmit}
            images={images}
            setImages={setImages}
        />
    )
}
 // <div>
        // <form onSubmit={handleSubmit(onClickSubmit)}>
        //     작성자 : <input type="text" {...register("name")}/>
        //     <br/>
        //     제목 : <input type="text" {...register("remarks")}/>
        //     <br/>
        //     가격 : <input type="number" {...register("price")}/>
        //     <br/>
        //     상품상세 : <input type="textarea" {...register("contents")}/>
        //     <br/>
        //     <button>등록하기</button>
        // </form>
        // <div><ImageProductWrite/></div>
        // </div>