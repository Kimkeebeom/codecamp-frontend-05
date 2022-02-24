import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types"

const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput!){
        createUseditem(createUseditemInput: $createUseditemInput){
            _id
            name
            remarks
            price
            contents
            images
        }
    }
`
interface IFormdata{
    name?: string,
    remarks?: string,
    price?: number,
    contents?: string
    images?: any
}

export default function ProductWrite(){

    const { register, handleSubmit, setValue } = useForm({
        mode:'onChange'
    })
    const [createUseditem] = useMutation<
    Pick<IMutation, 'createUseditem'>,
    IMutationCreateUseditemArgs
    >(CREATE_USED_ITEM)

    // const [name, setName] = useState("")
    // const [remarks, setRemarks] = useState("")
    // const [price, setPrice] = useState(0)
    // const [contents, setContents] = useState("")
    const [images, setImages] = useState(["","",""])

    // function productWriter(event: ChangeEvent<HTMLInputElement>){
    //     setName(event.target.value)
    // }

    // function productTitle(event: ChangeEvent<HTMLInputElement>){
    //     setRemarks(event.target.value)
    // }

    // function productPrice(event: ChangeEvent<HTMLInputElement>){
    //     setPrice(event.target.valueAsNumber)
    // }

    // function productContents(event: ChangeEvent<HTMLTextAreaElement>){
    //     setContents(event.target.value)
    // }

    function onChangeImages(image: string, index: number){
        const newImages = [...images];
        newImages[index] = image;
        setImages(newImages)
        console.log("image:", newImages)
    }

    const onClickSubmit = async (data: IFormdata) => {
        // if(!(data.name && data.remarks && data.price && data.contents)){
        //     Modal.warn({content: "필수 입력 사항입니다!"})
        //     return
        //   }
        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput:{
                        name: data.name,
                        remarks: data.remarks,
                        price: Number(data.price),
                        contents: data.contents,
                        // images: data.images
                    }
                }
            })
            console.log(result)
        } catch (error) {
            Modal.error({content:error.message})
        }

        console.log(data)
        // setValue("images", value === "url" ? "": value)
    }

    return(
        <form onSubmit={handleSubmit(onClickSubmit)}>
            {/* 이미지: <input type="url" {...register("Image")}/>
            <br/> */}
            작성자: <input type="text" {...register("name")}/>
            <br/>
            제목: <input type="text" {...register("remarks")}/>
            <br/>
            가격: <input type="number" {...register("price")}/>
            <br/>
            상품상세: <input type="textarea" {...register("contents")}/>
            <br/>
            <button>등록하기</button>
        </form>
        // <div>
        //     <div>
        //         <div>
        //             작성자 : <input type="text" onChange={productWriter}/>
        //         </div>
        //         <div>제목</div>
        //         <div>가격</div>
        //         <div>상품상세</div>
        //         <button onClick={onClickSubmit}>등록하기</button>
        //     </div>
        // </div>
    )
}