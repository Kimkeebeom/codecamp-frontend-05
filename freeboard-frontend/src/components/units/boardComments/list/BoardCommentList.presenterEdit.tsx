import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState, MouseEvent, ChangeEvent } from "react";
import * as S from './BoardCommentsList.styles'
import { IMutation, IMutationDeleteBoardCommentArgs, 
    IMutationUpdateBoardCommentArgs, IQuery, 
    IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "./BoardCommentsList.query";
import { getMyDate } from "../../../../commons/libraries/utils";

export interface IBoardCommentListEditUIProps{
    data?: Pick<IQuery, "fetchBoardComments">;
}

export interface IBoardCommentListUIProps{
    data?: Pick<IQuery, "fetchBoardComments">;
    modalOpen: boolean;
    onLoadMore: () => void
    onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
    onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
    onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function BoardCommentListEditUI(props){
    const router = useRouter()

    const [modalOpen, setModalOpen] = useState(false)
    const [password, setPassword] = useState("")
    const [chooseId, setChooseId] = useState("")

    const [editStar, setEditStar] = useState(0)
    const [editContents, setEditContents] = useState("")
    const [editPassword, setEditPassword] = useState("")
    const [commentEdit, setCommentEdit] = useState(false)

    // const {data} = useQuery<
    // Pick<IQuery,"fetchBoardComments">,
    // IQueryFetchBoardCommentsArgs
    // >(FETCH_BOARD_COMMENTS, {
    //     variables: { boardId: String(router.query.move) }
    // })

    const [deleteBoardComment] = useMutation<
    Pick<IMutation,"deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT)

    function onClickOpenDeleteModal(event: MouseEvent<HTMLImageElement>){
        setModalOpen(true)
        setChooseId(event.target.id)
    }

    function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    const onClickCancel =() =>{
        setModalOpen(false)
    }

    // 댓글 삭제 기능
    async function onClickDelete() {
        try{
            console.log(password)
            console.log(chooseId)
            await deleteBoardComment({
                variables:{
                    password: password,
                    // boardCommentId: event.currentTarget.id // onClick 이벤트는 커런트타겟으로 받아오면 된다고 생각하자!
                    boardCommentId: chooseId
                },
                refetchQueries: [
                    { 
                     query: FETCH_BOARD_COMMENTS,
                     variables: {boardId: router.query.move} 
                    }
                ]
            })
            setModalOpen(false)
            Modal.success({content: "삭제되었습니다."})
        } catch(error) {
            // Modal.error({content: "비밀번호를 입력해주세요!"});
        }
    }

    const [updateBoardComment] = useMutation<
    Pick<IMutation,"updateBoardComment">,
    IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT)

    function onClickUpdateButton(event: MouseEvent<HTMLImageElement>){
        setCommentEdit(true)
        setChooseId(event.currentTarget.id)
        alert("수정하기버튼클릭")
        console.log(event.currentTarget.id) // 아이디가 콘솔창에 안뜬다.
    }

    async function onClickUpdate(event) {

        try{
            const updateBoardCommentInput: IUpdateBoardCommentInput = {};
            if (editContents) updateBoardCommentInput.contents = editContents; // .contents(key값) = myContents(value값)
            if (editStar) updateBoardCommentInput.rating = editStar;

            await updateBoardComment({
                variables: {
                    updateBoardCommentInput,
                    password: editPassword,
                    boardCommentId: event.currentTarget.id
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.move }
                    }
                ]
            })
            setCommentEdit(false)
        } catch (error){
            Modal.error({content:"에러입니다."})
        }
    }

    return(
        <div>
            {/* 삭제하기 창 & 수정하기 클릭했을 때 false값일 때의 화면 */}
        {modalOpen && (
            <Modal
                visible={true}
                title="비밀번호를 입력해주세요"
                onOk={onClickDelete}
                onCancel={onClickCancel}
            >  
                <div>비밀번호 입력: </div>
                <S.CommentDeletePassword onChange={onChangeDeletePassword} type="password"/>  
            </Modal>
        )}
            <S.Boundary key={props.el._id}>
                <S.HeaderBox>
                    <S.Avartar src='/images/board/detail/avatar.png'/>
                    <S.MainBox>
                        <S.WriterBox>
                            <S.Writer>{props.el?.writer}</S.Writer>
                            <S.Rating value={props.el?.rating} disabled />
                        </S.WriterBox>
                        <S.ContentsBox>{props.el.contents}</S.ContentsBox>
                    </S.MainBox>    
                    <S.IconBox>
                        <S.UpdateIcon
                            src='/images/boardComment/option_update_icon.png'
                            onClick={onClickUpdateButton}
                        />
                        <S.DeleteIcon
                            src='/images/boardComment/option_delete_icon.png'
                            id={props.el._id}
                            onClick={onClickOpenDeleteModal}
                        />
                    </S.IconBox>
                </S.HeaderBox>    
                <S.CreatedAt>{getMyDate([props.el.createdAt])}</S.CreatedAt>
            </S.Boundary>
    </div>
    )
}