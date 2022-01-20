import {gql, useMutation, useQuery} from '@apollo/client'
import {Row, Column, Boundary} from '../../src/components/units/board/write/Quiz2-2-1.styles'

const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId:ID){
        deleteProduct(productId: $productId){
            message
        }
    }
`


export default function fetchProductsPage(){
    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const {data} = useQuery(FETCH_PRODUCTS)
    
    const onClickDelete = (event) => {
        deleteProduct({
            variables:{productId: event.target.id},
            refetchQueries: [{query:FETCH_PRODUCTS}]
        })
        event.target.id
    }


    return( //옵셔널체이닝을 부여해도 웹화면에 데이터가 안나타남;
        <Boundary>
            {data?.fetchProducts.map((el) => (
                <Row key={el._id}>
                    <Column><input type="checkbox"/></Column>
                    <Column id="id">{el._id}</Column>
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>{Array.from(el.createdAt).slice(0,19).join("")}</Column>
                    <Column><button id={el._id} onClick={onClickDelete}>삭제</button></Column>
                </Row> 
            ))}
        </Boundary>
    )

}