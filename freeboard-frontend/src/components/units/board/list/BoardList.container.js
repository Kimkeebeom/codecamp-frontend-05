import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'


export default function BoardList(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARDS)

    const boardRegister = () => {
        router.push("/board/new")
    }

    const MoveToDetailBoard = (event) => {
        router.push(`/board/${event.target.id}`)
    }

    return(
        <BoardListUI
            data={data}
            boardRegister={boardRegister}
            MoveToDetailBoard={MoveToDetailBoard}   
        />
    )

}