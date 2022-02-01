import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { IMutation, IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } 
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


    const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
    >(LIKE_BOARD)

    const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
    >(DISLIKE_BOARD)

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
            // const showDeleteConfirm:any = () => {
            //     confirm({
            //       title: '정말 이 게시물을 삭제하시겠습니까?',
            //       icon: <ExclamationCircleOutlined />,
            //       content: 'Some descriptions',
            //       okText: 'Yes',
            //       okType: 'danger',
            //       cancelText: 'No',
            //       onOk() {
            //         console.log('OK');
            //       },
            //       onCancel() {
            //         console.log('Cancel');
            //       },
            //     });
            //   }
            // alert('삭제가 완료되었습니다.')
            router.push(`/board/list`)
        } catch(error){
            alert(error.message)
        }
    }

    const onClickLike = () => {
        likeBoard({
            variables: { boardId: String(router.query.move)},
            refetchQueries: [
                { query: FETCH_BOARD, variables: { boardId: String(router.query.move)}}
            ]
        })
    }

    const onClickDisLike = () => {
        dislikeBoard({
            variables: { boardId: String(router.query.move)},
            refetchQueries: [
                { query: FETCH_BOARD, variables: { boardId: String(router.query.move)}}
            ]
        })
    }

    return(
        <BoardDetailUI
            data={data}
            modalOpen={modalOpen}
            MoveToBoardList={MoveToBoardList}
            MoveToBoardEdit={MoveToBoardEdit}
            onClickDelete={onClickDelete}
            onClickLike={onClickLike}
            onClickDisLike={onClickDisLike}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickCancel={onClickCancel}
        />
    )

}