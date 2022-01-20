import * as S from './Quiz2-1-1.styles'

export default function RoutingMainUI(props){

    return(
        <div>
            <S.MyButton onClick={props.aaa}>1번 게시글로 이동하기</S.MyButton>
            <S.MyButton onClick={props.bbb}>2번 게시글로 이동하기</S.MyButton>
            <S.MyButton onClick={props.ccc}>3번 게시글로 이동하기</S.MyButton>
            <S.MyButton onClick={props.ddd}>4번 게시글로 이동하기</S.MyButton>
            <S.MyButton onClick={props.eee}>100번 게시글로 이동하기</S.MyButton>
            <S.MyButton onClick={props.fff} onChangeColor={props.isActive}>색바꾸기</S.MyButton>
        </div>
    )

}