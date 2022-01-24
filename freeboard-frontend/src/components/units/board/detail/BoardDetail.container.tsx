import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail(){
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD,{
        variables: { boardId: String(router.query.move)}
    })

    const MoveToBoardList = () => {
        router.push("/board/list")
    }

    const MoveToBoardEdit = () => {
        router.push(`/board/${router.query.move}/edit`)
    }

    const onClickDelete = async () => {
        try{
            await deleteBoard({
                variables: { boardId: String(router.query.move)}
            })
            alert('삭제가 완료되었습니다.')
            router.push(`/board/list`)
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <BoardDetailUI
            data={data}
            MoveToBoardList={MoveToBoardList}
            MoveToBoardEdit={MoveToBoardEdit}
            onClickDelete={onClickDelete}
        />
    )

}