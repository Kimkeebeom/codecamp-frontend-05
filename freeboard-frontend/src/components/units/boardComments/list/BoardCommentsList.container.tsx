import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { MouseEvent, useState } from "react"
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

    // const [password, setPassword] = useState("")
    // const [chooseId, setChooseId] = useState("")

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

    // 댓글 삭제 기능
    async function onClickDelete(event: MouseEvent<HTMLImageElement>) {
        const password = prompt("비밀번호를 입력하세요.")
        try{
            await deleteBoardComment({
                variables:{
                    password: password,
                    boardCommentId: event.currentTarget.id // onClick 이벤트는 커런트타겟으로 받아오면 된다고 생각하자!
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