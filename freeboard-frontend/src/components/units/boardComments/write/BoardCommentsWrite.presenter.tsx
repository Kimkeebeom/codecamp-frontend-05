import { ChangeEvent } from 'react'
import * as S from './BoardCommentsWrite.styles'

export interface IBoardCommentsWriteUIProps{
    contents: String;
    onClickRegis: (event:React.MouseEvent<HTMLButtonElement>) => void; // onClick함수는 마우스이벤트로 받아온다!
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeStar: (value: number) => void;
}

export default function BoardCommentWriteUI(props: IBoardCommentsWriteUIProps){
    return(
        <S.Wrapper>
            <S.PencilIcon src='/images/boardComment/pencil.png' />
            <span>댓글</span>
            <S.WrapperInput>
                <S.InputWriter placeholder="작성자" onChange={props.onChangeWriter}/>
                <S.InputPassword type="password" placeholder="비밀번호" onChange={props.onChangePassword} />
                <S.Star onChange={props.onChangeStar} />
            </S.WrapperInput>
            <S.WrapperContents>
                <S.Contents 
                maxLength={100}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                onChange={props.onChangeContents}
                />
                <S.WrapperContentsBottom>
                    <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
                    <S.Button onClick={props.onClickRegis}>등록하기</S.Button>
                </S.WrapperContentsBottom>
            </S.WrapperContents>
        </S.Wrapper>
    )
}