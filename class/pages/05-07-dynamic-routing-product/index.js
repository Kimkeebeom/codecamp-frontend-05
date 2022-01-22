// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct(){
    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)
   
    const onClickSubmit = async() => {
        // const result = await axios.get("https:koreanjson.com/posts/1")
        try{
            const result = await createProduct({ // 어떠한 변수명을 설정해줘도 상관없다.(resutl)
                variables: {
                    seller: seller, // key와 value가 같으면 seller, 이렇게 쓸 수 있다.(shorthand property)
                    createProductInput: {
                        name: name, 
                        detail: detail,
                        price: Number(price)
                    }
                }
            })
            // console.log(result.data.createProductInput._id)
            // Router.push('/')
            console.log(result.data.createProduct._id) // b8b71278-df1c-40ee-a26c-83d2da281201
    
            router.push(`/05-08-dynamic-routed-product/'${result.data.createProduct._id}`) // 템플릿 리터럴 방식 
        } catch(error){
            console.log(error.message)
        } // finally {

        // }// 성공을 했든 실패를 했든 무조건 마지막에 실행되는 기능
        
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }


    return ( 
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br/>
            상품명: <input type="text"  onChange={onChangeName}/><br/>
            상품내용: <input type="text"  onChange={onChangeDetail}/><br/>
            상품가격: <input type="text" onChange={onChangePrice}/><br/>
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )
}