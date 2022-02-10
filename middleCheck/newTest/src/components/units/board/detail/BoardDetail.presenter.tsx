import * as S from './BoardDetail.styles'
import { Modal } from 'antd';
import { getMyDate } from '../../../../commons/libraries/date/utils';
import { Key } from 'react';

export default function BoardDetailUI(props: any){
    console.log(props.data?.fetchBoard.images)

return(
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
                            <S.Info>
                                <S.CreatedAt>{getMyDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
                            </S.Info>
                        </S.AvatarWrapper>
                    </S.WrapperHeader>
                    <S.WrapperBody>
                        <S.BodyTitle>{props.data?.fetchBoard?.title}</S.BodyTitle>
                        <S.BodyContents>
                            {props.data?.fetchBoard?.contents}   
                        </S.BodyContents>
                        <S.BodayImageWrapper>
                            {props.data?.fetchBoard.images
                                ?.filter((el: any) => el) // el이 빈문자열이면 false여서 사진을 업로드 안한 부분은 보여지지 않게 됨
                                .map((el: Key) => (
                                    <S.Image key={el}
                                        src={`https://storage.googleapis.com/${el}`}/>
                                 ))}
                        </S.BodayImageWrapper>  
                    </S.WrapperBody>
                </S.WrapperBox>
                <S.WrapperBottom>
                    <S.Button onClick={props.MoveToBoardList}>목록으로</S.Button>
                    <S.Button onClick={props.MoveToBoardEdit}>수정하기</S.Button>
                    <S.Button onClick={props.onClickOpenDeleteModal}>삭제하기</S.Button>
                </S.WrapperBottom>
            </S.Wrapper>
        </div>    
    )
}