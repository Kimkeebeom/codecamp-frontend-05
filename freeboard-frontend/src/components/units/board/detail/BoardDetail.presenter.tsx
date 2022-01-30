import * as S from './BoardDetail.styles'
import { getMyDate } from '../../../../commons/libraries/utils'
import BoardCommentWrite from '../../boardComments/write/BoardCommentsWrite.container'

export default function BoardDetailUI(props){

return( // data? : 옵셔널 체이닝(조건부랜더링) => data && data와 같은 의미로 데이터가 있을 때 데이터를 보여줘라는 기능
        <div>
            <S.Wrapper>
                <S.WrapperBox>
                    <S.WrapperHeader>
                        <S.AvatarWrapper>
                            <S.Avatar src='/images/board/detail/avatar.png'/>
                            <S.Info>
                                <S.HeaderWriter>{props.data?.fetchBoard?.writer}</S.HeaderWriter>
                                <S.CreatedAt>{getMyDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
                            </S.Info>
                        </S.AvatarWrapper>
                    </S.WrapperHeader>
                    <S.WrapperBody>
                        <S.BodyTitle>{props.data?.fetchBoard?.title}</S.BodyTitle>
                        <S.BodyContents>{props.data?.fetchBoard?.contents}</S.BodyContents>
                    </S.WrapperBody>
                </S.WrapperBox>
                <S.WrapperBottom>
                    <S.Button onClick={props.MoveToBoardList}>목록으로</S.Button>
                    <S.Button onClick={props.MoveToBoardEdit}>수정하기</S.Button>
                    <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
                </S.WrapperBottom>
            </S.Wrapper>
            <BoardCommentWrite/>
        </div>    
    )
}