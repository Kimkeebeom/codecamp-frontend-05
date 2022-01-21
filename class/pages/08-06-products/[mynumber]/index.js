// 상품 상세페이지  

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`

export default function ProductDetailPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.mynumber },
  })

  console.log(data)

  const onClickMoveToEdit = () => {
    router.push(`/08-06-products/${router.query.mynumber}/edit`)
  }

  return (
    <div>
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>상품명 : {data?.fetchProduct?.name}</div>
      <div>상품내용: {data?.fetchProduct?.detail}</div>
      <div>상품가격: {data?.fetchProduct?.price}</div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </div>
  );
}