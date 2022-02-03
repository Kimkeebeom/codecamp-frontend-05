import { getMyDate } from '../../../../commons/libraries/utils'
import { IQuery } from '../../../../commons/types/generated/types'
import { ChangeEvent, MouseEvent } from 'react'
import * as S from './BoardCommentsList.styles'
import { Modal } from 'antd'

export interface IBoardCommentListUIProps{
    data?: Pick<IQuery, "fetchBoardComments">;
    modalOpen: boolean;
    onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
    onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
    onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function BoardCommentsListUI(props){

    return(
        <div>
            {props.modalOpen && (
                <Modal
                    visible={true}
                    title="비밀번호를 입력해주세요"
                    onOk={props.onClickDelete}
                    onCancel={props.onClickCancel}
                >  
                    <div>비밀번호 입력: </div>
                    <S.CommentDeletePassword type="password"/>  
                </Modal>
            )}
            {props.data?.fetchBoardComments?.map((el)=>(
                <S.Boundary key={el._id}>
                    <S.HeaderBox>
                        <S.Avartar src='/images/board/detail/avatar.png'/>
                        <S.MainBox>
                            <S.WriterBox>
                                <S.Writer>{el?.writer}</S.Writer>
                                <S.Rating value={el?.rating} disabled />
                            </S.WriterBox>
                            <S.ContentsBox>{el.contents}</S.ContentsBox>
                        </S.MainBox>    
                        <S.IconBox>
                            <S.UpdateIcon
                                src='/images/boardComment/option_update_icon.png'
                            />
                            <S.DeleteIcon
                                src='/images/boardComment/option_delete_icon.png'
                                id={el._id}
                                onClick={props.onClickOpenDeleteModal}
                            />
                        </S.IconBox>
                    </S.HeaderBox>    
                    <S.CreatedAt>{getMyDate(el.createdAt)}</S.CreatedAt>
                </S.Boundary>
                ))}
        </div>
    )
}