import { getMyDate } from '../../../../commons/libraries/utils'
import { IQuery } from '../../../../commons/types/generated/types'
import { MouseEvent } from 'react'
import * as S from './BoardCommentsList.styles'

export interface IBoardCommentListUIProps{
    data?: Pick<IQuery, "fetchBoardComments">;
    onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}

export default function BoardCommentsListUI(props){

    return(
        <div>
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
                                <S.UpdateIcon/>
                                <S.DeleteIcon
                                id={el._id}
                                onClick={props.onClickDelete}
                                />
                            </S.IconBox>
                        </S.HeaderBox>    
                        <S.CreatedAt>{getMyDate(el.createdAt)}</S.CreatedAt>
                    </S.Boundary>
                ))}
        </div>
    )
}