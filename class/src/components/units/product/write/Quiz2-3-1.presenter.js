// 상품 HTML 페이지

import * as S from "./Quiz2-3-1.styles";

export default function ProductWriteUI(props) {
  return (
    <>
      <h1>상품 {props.isEdit ? "수정하기" : "등록하기"}</h1>
      판매자: <input type="text" onChange={props.seller} /><br />
      상품명: <S.MyInput type="text" onChange={props.Name} /><br />
      상품내용: <S.MyInput type="text" onChange={props.detail} /><br />
      상품가격: <S.MyInput type="text" onChange={props.price} /><br />
      <S.MyButton
        onClick={
          props.isEdit ? props.edit : props.move
        }
        ggg={props.isActive}
      >
        상품{props.isEdit ? "수정하기" : "등록하기"}
      </S.MyButton>
      </>
  )
}