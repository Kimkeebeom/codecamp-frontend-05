// import {MyInput, MyButton} from './BoardWrite.styles'
import * as S from './BoardWrite.styles' // 위의 import식에서 {}안에 많은 변수를 담기 힘들때 한꺼번에 가져올 때 쓸 수 있는 코드

// 등록하기 페이지 HTML
export default function BoardWriteUI(props){
// HTML
    return(
    <>
        <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
        작성자: <S.MyInput type="text" onChange={props.ddd} /><br />
        제목: <S.MyInput type="text" onChange={props.eee}/><br />
        내용: <S.MyInput type="text" onChange={props.fff}/><br />
        <S.MyButton 
            onClick={props.isEdit ? props.xxx : props.ccc} 
            ggg={props.isActive}
        >
            {props.isEdit ? "수정하기" : "등록하기"}
        </S.MyButton>

            {/* {props.isEdit ? (
                <S.MyButton onClick={props.xxx} ggg={props.xxx}>수정하기</S.MyButton>
            ) : (
                <S.MyButton onClick={props.xxx} ggg={props.xxx}>등록하기</S.MyButton>
            )}

            {props.isEdit && <S.MyButton onClick={props.xxx} ggg={props.xxx}>수정하기</S.MyButton>}
            {!props.isEdit && <S.MyButton onClick={props.xxx} ggg={props.xxx}>등록하기</S.MyButton>} */}
        <div>{props.bbb}</div>
    </>
    )

}