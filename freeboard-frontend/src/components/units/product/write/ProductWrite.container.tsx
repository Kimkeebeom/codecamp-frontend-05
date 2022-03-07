import { useMutation } from "@apollo/client"
import { Modal } from "antd"
import * as yup from 'yup'
import { Router, useRouter } from "next/router"
import { ChangeEvent, SetStateAction, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types"
import ProductWriteUI from "./ProductWrite.presenter"
import { CREATE_USED_ITEM } from "./ProductWrite.queries"
import { yupResolver } from "@hookform/resolvers/yup"
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

const schema = yup.object().shape({
    name: yup.string().max(100).required('필수입력'),
    price: yup.number().min(1).required('필수입력'),
  })

export interface IFormValues {
    name?: string
    remarks?: string
    price?: number
    contents?: string
    title?: string
    images?: string[]
    zipcode?: string
    address?: string
    addressDetail?: string
    email?: string
  }

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

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

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

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false);
        //ok 누르면 창이 사라짐
      };

      const handleCancel = () => {
        setIsModalVisible(false);
        //cancle 누르면 창 사라짐
      };

      const onChangeAddressDetail = (event) => {
        setAddressDetail(event.target.value);
      };

      const onCompleteDaumPostCode = (data: any) => {
        setAddress(data.address);
        setZipcode(data.zonecode)
        setIsModalVisible(false);
      };

      const { register, handleSubmit, formState, setValue } = useForm<IFormValues>({
        mode: 'onChange',
        defaultValues: {},
        resolver: yupResolver(schema),
      })

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
                        name,
                        remarks,
                        price: Number(price),
                        contents,
                        images,
                        useditemAddress: {
                            zipcode,
                            address,
                            addressDetail,
                            // lat: lat,
                            // lng: lng,
                          },
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
            isEdit={props.isEdit}
            productWriter={productWriter}
            productTitle={productTitle}
            productPrice={productPrice}
            productContents={productContents}
            onClickSubmit={onClickSubmit}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            images={images}
            isModalVisible={isModalVisible}
            zipcode={zipcode}
            address={address}
            addressDetail={addressDetail}
            setImages={setImages}
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            onChangeAddressDetail={onChangeAddressDetail}
            onCompleteDaumPostCode={onCompleteDaumPostCode}
            // onChangeImages={onChangeImages}
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