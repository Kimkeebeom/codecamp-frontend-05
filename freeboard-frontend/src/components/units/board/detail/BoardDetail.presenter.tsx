import * as S from './BoardDetail.styles'
import { getMyDate } from '../../../../commons/libraries/utils'
import BoardCommentWrite from '../../boardComments/write/BoardCommentsWrite.container'
import BoardCommentList from '../../boardComments/list/BoardCommentsList.container'
import {ExclamationCircleOutlined} from '@ant-design/icons'
import { Modal } from 'antd';

export default function BoardDetailUI(props: any){

return( // data? : 옵셔널 체이닝(조건부랜더링) => data && data와 같은 의미로 데이터가 있을 때 데이터를 보여줘라는 기능
        <div>
            {props.modalOpen && (
                <Modal
                    visible={true}
                    title="이 게시물을 정말 삭제하시겠습니까?"
                    onOk={props.onClickDelete}
                    onCancel={props.onClickCancel}
                >
                    <div>제목: {props.data?.fetchBoard?.title}</div>
                </Modal>
            )}    
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
                        <S.BodyContents>
                            {props.data?.fetchBoard?.contents}   
                        </S.BodyContents>  
                        <S.Youtube 
                            url={props.data?.fetchBoard.youtubeUrl}
                            width="800px"
                            // height="500px"
                        />  
                    </S.WrapperBody>
                    <S.IconBox>
                        <S.LikeBox>
                            <S.LikeIcon onClick={props.onClickLike}/>
                            <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
                        </S.LikeBox>
                        <S.DisLikeBox>
                            <S.DisLikeIcon onClick={props.onClickDisLike}/>
                            <S.DisLikeCount>{props.data?.fetchBoard?.dislikeCount}</S.DisLikeCount>
                        </S.DisLikeBox>
                    </S.IconBox>
                </S.WrapperBox>
                <S.WrapperBottom>
                    <S.Button onClick={props.MoveToBoardList}>목록으로</S.Button>
                    <S.Button onClick={props.MoveToBoardEdit}>수정하기</S.Button>
                    <S.Button onClick={props.onClickOpenDeleteModal}>삭제하기</S.Button>
                </S.WrapperBottom>
            </S.Wrapper>
            <BoardCommentWrite/>
            <BoardCommentList/>
        </div>    
    )
}