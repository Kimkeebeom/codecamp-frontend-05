import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../../commons/types/generated/types'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'


export default function BoardList(){
    const router = useRouter()
    const {userInfo} = useContext(GlobalContext)
    const [keyword, setKeyword] = useState("")

    const {data, refetch} = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
    >(FETCH_BOARDS, {variables: { page: 1 }})

    const {data: dataBoardsCount, refetch: refetchBoardsCount} = useQuery<
    Pick<IQuery,"fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT)

    const boardRegister = () => {
        router.push("/board/new")
    }

    const MoveToDetailBoard = (event: { target: { id: any } }) => {
        router.push(`/board/${event.target.id}`)
    }

    const onChangeKeyword = (value: string) => {
        setKeyword(value)
    }

    return(
        <BoardListUI
            userInfo={userInfo}
            data={data}
            refetch={refetch}
            refetchBoardsCount={refetchBoardsCount}
            count={dataBoardsCount?.fetchBoardsCount}
            keyword={keyword}
            boardRegister={boardRegister}
            MoveToDetailBoard={MoveToDetailBoard}
            onChangeKeyword={onChangeKeyword}   
        />
    )

}