// import { getMyDate } from '../../../../commons/libraries/utils'
// import { IBoardComment } from '../../../../commons/types/generated/types'
// import { ChangeEvent, MouseEvent, useState } from 'react'
// import * as S from './BoardCommentsList.styles'
// import { Modal } from 'antd'
// import BoardCommentWrite from '../write/BoardCommentsWrite.container'

// export interface IBoardCommentsListEditProps{
//     el: IBoardComment
//     modalOpen: boolean;
//     onClickCancel: (event: MouseEvent<HTMLElement>) => void
//     onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
//     onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
//     onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
// }

// export default function BoardCommentsListEdit(props){

//     const [isEdit, setIsEdit] = useState(false)

//     function onClickUpdate(){
//         setIsEdit(true)
//     }

//     return(
//         <div>
//             {props.modalOpen && (
//                 <Modal
//                     visible={true}
//                     title="비밀번호를 입력해주세요"
//                     onOk={props.onClickDelete}
//                     onCancel={props.onClickCancel}
//                 >  
//                     <div>비밀번호 입력: </div>
//                     <S.CommentDeletePassword onChange={props.onChangeDeletePassword} type="password"/>  
//                 </Modal>
//             )}
//             {/* {props.data?.fetchBoardComments?.map((el)=>( */}
//                 {isEdit === true && (
//                     <S.Boundary>
//                         <S.HeaderBox>
//                             <S.Avartar src='/images/board/detail/avatar.png'/>
//                             <S.MainBox>
//                                 <S.WriterBox>
//                                     <S.Writer>{props.el?.writer}</S.Writer>
//                                     <S.Rating value={props.el?.rating} disabled />
//                                 </S.WriterBox>
//                                 <S.ContentsBox>{props.el.contents}</S.ContentsBox>
//                             </S.MainBox>    
//                             <S.IconBox>
//                                 <S.UpdateIcon
//                                     src='/images/boardComment/option_update_icon.png'
//                                     onClick={onClickUpdate}
//                                 />
//                                 <S.DeleteIcon
//                                     src='/images/boardComment/option_delete_icon.png'
//                                     id={props.el._id}
//                                     onClick={props.onClickOpenDeleteModal}
//                                 />
//                             </S.IconBox>
//                         </S.HeaderBox>    
//                         <S.CreatedAt>{getMyDate(props.el.createdAt)}</S.CreatedAt>
//                     </S.Boundary>
//                 )}
//             {/* ))} */}
//             {isEdit && (
//                 <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el}/>
//             )}
//         </div>
//     )
// }