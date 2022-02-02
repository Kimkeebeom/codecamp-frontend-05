import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, MouseEvent, useState } from "react"
import { 
    IMutation, 
    IMutationDeleteBoardCommentArgs, 
    IQuery, 
    IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"
import BoardCommentsListUI from "./BoardCommentsList.presenter"
import { DELETE_BOARD_COMMENT, 
    FETCH_BOARD_COMMENTS } from "./BoardCommentsList.query"
import { Modal } from "antd"

export default function BoardCommentList(){
    const router = useRouter()

    const [modalOpen, setModalOpen] = useState(false)
    const [password, setPassword] = useState("")
    const [chooseId, setChooseId] = useState("")

    const {data} = useQuery<
    Pick<IQuery,"fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.move) }
    })

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
        } catch(error) {
            Modal.warning({content: "비밀번호를 입력해주세요!"});
        }
    }

    return(
        <BoardCommentsListUI
            data={data}
            modalOpen={modalOpen}
            onClickDelete={onClickDelete}
            onClickCancel={onClickCancel}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onChangeDeletePassword={onChangeDeletePassword}
        />
    )

}