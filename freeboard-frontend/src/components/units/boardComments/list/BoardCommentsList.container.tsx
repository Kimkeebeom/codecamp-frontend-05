import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { 
    IMutation, 
    IMutationDeleteBoardCommentArgs, 
    IQuery, 
    IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"
import BoardCommentsListUI from "./BoardCommentsList.presenter"
import { DELETE_BOARD_COMMENT, 
    FETCH_BOARD_COMMENTS } from "./BoardCommentsList.query"

export default function BoardCommentList(){
    const router = useRouter()

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

    async function onClickDelete() {
        const password = prompt("비밀번호를 입력하세요.")
        try{
            await deleteBoardComment({
                variables:{
                    password: password,
                    boardCommentId: chooseId
                },
                refetchQueries: [
                    { 
                     query: FETCH_BOARD_COMMENTS,
                     variables: {boardId: router.query.move} 
                    }
                ]
            })
        } catch(error) {
            alert(error.message);
        }
    }

    return(
        <BoardCommentsListUI
            data={data}
            onClickDelete={onClickDelete}
        />
    )

}