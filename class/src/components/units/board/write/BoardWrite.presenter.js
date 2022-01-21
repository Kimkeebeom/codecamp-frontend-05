// import {MyInput, MyButton} from './BoardWrite.styles'
import * as S from './BoardWrite.styles' // 위의 import식에서 {}안에 많은 변수를 담기 힘들때 한꺼번에 가져올 때 쓸 수 있는 코드

export default function BoardWriteUI(props){
// HTML
    return(
        <>
        작성자: <S.MyInput type="text" onChange={props.ddd} /><br />
        제목: <S.MyInput type="text" onChange={props.eee}/><br />
        내용: <S.MyInput type="text" onChange={props.fff}/><br />
        <S.MyButton onClick={props.ccc} ggg={props.isActive}>GRAPHQL-API 요청하기!!!</S.MyButton>
        <div>{props.bbb}</div>
    </>
    )

}