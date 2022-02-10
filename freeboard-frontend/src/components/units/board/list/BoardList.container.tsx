import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../../commons/types/generated/types'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'


export default function BoardList(){
    const router = useRouter()

    const {data, refetch} = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
    >(FETCH_BOARDS, {variables: { page: 1 }})

    const {data: dataBoardsCount} = useQuery<
    Pick<IQuery,"fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT)

    const boardRegister = () => {
        router.push("/board/new")
    }

    const MoveToDetailBoard = (event) => {
        router.push(`/board/${event.target.id}`)
    }

    return(
        <BoardListUI
            data={data}
            refetch={refetch}
            count={dataBoardsCount?.fetchBoardsCount}
            boardRegister={boardRegister}
            MoveToDetailBoard={MoveToDetailBoard}   
        />
    )

}