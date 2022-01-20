//상품 등록 페이지

import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import ProductWriteUI from "./Quiz2-3-1.presenter"

const CREATE_PROUDCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct( createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID,
    $updateProductInput: UpdateProductInput!) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput) {
      _id
      number
      message
    }
  }
`

export default function ProductWrite(props){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    // const [aaa, setAaa] = useState("")
    const [createProduct] = useMutation(CREATE_PROUDCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    //등록하기 함수
    const onClickMoveToMynumber = async () => {
        try{
              const result = await createProduct({
                variables: {
                  seller: seller,
                  createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
                  }
                }
              })
              router.push(`/08-06-Products/${router.query.mynumber}`)
            }catch (error){
                console.log(error.message)
            }
        
      }
      
    //수정하기 함수 
    const onClickMoveToEdit = async () => {
        console.log("수정하기를 클릭하셨군요!!!");
        try{
          await updateProduct({
            variables: {
              productId: router.query.mynumber,
              updateProductInput: {
                name: name,
                detail: detail,
                price: Number(price),
              }
            }
          })
          console.log(result)
          router.push(`/08-06-Products/${router.query.mynumber}`);
        } catch (error){
          console.log(error.message)
        }
        
        
      }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
        if(event.target.value && name && detail && price){
            setIsActive(true)
        }
    }
    const onChangeName = (event) => {
        setName(event.target.value)
        if(seller && event.target.value && detail && price){
            setIsActive(true)
        }
    }
    const onChangeDetail = (event) => {
        setDetail(event.target.value)
        if(seller && name && event.target.value && price){
            setIsActive(true)
        }
    }
    const onChangePrice = (event) => {
        setPrice(event.target.value)
        if(seller && name && detail && event.target.value){
            setIsActive(true)
        }
    }

    return(
        <ProductWriteUI   
            seller={onChangeSeller}
            Name={onChangeName}
            detail={onChangeDetail}
            price={onChangePrice}
            move={onClickMoveToMynumber}
            edit={onClickMoveToEdit}
            isActive={isActive}
            isEdit={props.isEdit}
        />
    )
}