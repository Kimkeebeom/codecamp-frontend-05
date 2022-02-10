import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { IQuery, IQueryFetchBoardArgs } 
    from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardDetail(){
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: { boardId: String(router.query.move)}
    })
    console.log(data)

    const MoveToBoardList = () => {
        router.push("/board/list")
    }

    const MoveToBoardEdit = () => {
        router.push(`/board/${router.query.move}/edit`)
    }

    const onClickOpenDeleteModal = () => {
        setModalOpen(true);
        console.log("123123")
    }

    const onClickCancel = () => {
        setModalOpen(false);
    }

    const onClickDelete = async () => {
        try{
            await deleteBoard({
                variables: { boardId: String(router.query.move)}
            })
            setModalOpen(false);
            router.push(`/board/list`)
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <BoardDetailUI
            data={data}
            modalOpen={modalOpen}
            MoveToBoardList={MoveToBoardList}
            MoveToBoardEdit={MoveToBoardEdit}
            onClickDelete={onClickDelete}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickCancel={onClickCancel}
        />
    )

}