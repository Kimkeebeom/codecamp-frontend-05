import {useRouter} from 'next/router'
import {useQuery, gql} from "@apollo/client"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`

export default function DynamicRoutedPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT,{
        variables: {productId: router.query.board}
    })

    console.log(data)
            //fetchProduct? : 게시물이 삭제 됐을 때, 이름이나 가격이 있으면 보여주거나 없으면 안보여주는 기능
    return( //data? : 옵셔널 체이닝(조건부랜더링) => data && data와 같은 의미로 데이터가 있을 때 데이터를 보여줘라는 기능
        <div>
            <div>판매자 : {data?.fetchProduct?.seller}</div>
            <div>상품명 : {data?.fetchProduct?.name}</div>
            <div>상품내용 : {data?.fetchProduct?.detail}</div> 
            <div>상품가격 : {data?.fetchProduct?.price}</div>
        </div>
    )
}