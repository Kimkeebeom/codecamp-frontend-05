import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useState } from 'react'
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs
} from '../../../../commons/types/generated/types'
import BoardCommentListEditUI from './BoardCommentList.presenterEdit'
import BoardCommentsListUI from './BoardCommentsList.presenter'
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS
} from './BoardCommentsList.query'

export default function BoardCommentList () {
  const router = useRouter()

  // const [modalOpen, setModalOpen] = useState(false)
  // const [password, setPassword] = useState("")
  // const [chooseId, setChooseId] = useState("")

  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.move) }
  })

  // const [deleteBoardComment] = useMutation<
  // Pick<IMutation,"deleteBoardComment">,
  // IMutationDeleteBoardCommentArgs
  // >(DELETE_BOARD_COMMENT)

  // function onClickOpenDeleteModal(event: MouseEvent<HTMLImageElement>){
  //     setModalOpen(true)
  //     setChooseId(event.target.id)
  // }

  // function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>){
  //     setPassword(event.target.value)
  // }

  // const onClickCancel =() =>{
  //     setModalOpen(false)
  // }

  // // 댓글 삭제 기능
  // async function onClickDelete() {
  //     try{
  //         console.log(password)
  //         console.log(chooseId)
  //         await deleteBoardComment({
  //             variables:{
  //                 password: password,
  //                 // boardCommentId: event.currentTarget.id // onClick 이벤트는 커런트타겟으로 받아오면 된다고 생각하자!
  //                 boardCommentId: chooseId
  //             },
  //             refetchQueries: [
  //                 {
  //                  query: FETCH_BOARD_COMMENTS,
  //                  variables: {boardId: router.query.move}
  //                 }
  //             ]
  //         })
  //         setModalOpen(false)
  //     } catch(error) {
  //         // Modal.error({content: "비밀번호를 입력해주세요!"});
  //     }
  // }

  function onLoadMore () {
    if (!data) return

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments) { return { fetchBoardComments: [...prev.fetchBoardComments] } }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments
          ]
        }
      }
    })
  }

  return (
    <div>
      <BoardCommentsListUI
        data={data}
        onLoadMore={onLoadMore}
        // modalOpen={modalOpen}
        // onClickDelete={onClickDelete}
        // onClickCancel={onClickCancel}
        // onClickOpenDeleteModal={onClickOpenDeleteModal}
        // onChangeDeletePassword={onChangeDeletePassword}
      />
    </div>
  )
}
