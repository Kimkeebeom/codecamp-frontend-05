import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardsArgs } from '../../../../commons/types/generated/types'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'


export default function BoardList(){
    const router = useRouter()

    const {data, fetchMore} = useQuery

    (FETCH_BOARDS, {
        variables: { page: 1}})

    function onLoadMore() {
        if (!data) return;
    
        fetchMore({
          variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult?.fetchBoards)
              return { fetchBoards: [...prev.fetchBoards] };
            return {
                fetchBoards: [
                ...prev.fetchBoards,
                ...fetchMoreResult.fetchBoards,
              ],
            };
          },
        });
      }

    const boardRegister = () => {
        router.push("/board/new")
    }

    const MoveToDetailBoard = (event) => {
        router.push(`/board/${event.target.id}`)
    }

    return(
        <BoardListUI
            data={data}
            onLoadMore={onLoadMore}
            boardRegister={boardRegister}
            MoveToDetailBoard={MoveToDetailBoard}   
        />
    )

}