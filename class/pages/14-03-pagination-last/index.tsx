import {gql, useQuery} from "@apollo/client"
import { useState } from "react"

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
        }
    }
`

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`

export default function PaginationLastPage(){
    const [startPage, setStartPage] = useState(1) // 초기페이지
    const {data, refetch} = useQuery(FETCH_BOARDS, {variables: { page: 1 }})
    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

    const onClickPage = (event) => {
        refetch({ page: Number(event.target.id) })        
    }

    const onClickPrevPage = () => {
        if(startPage === 1) return // 시작페이지가 1페이지면 여기서 끝내줘!!!!
        setStartPage((prev) => prev - 10)
        refetch({ page: startPage - 10 }) // 이전페이지 누를때마다 해당하는 처음 페이지에(ex: 11페이지, 21페이지 등) 대한 목록을 보여줌!
    }

    const onClickNextPage = () => {
        if(startPage + 10 > lastPage) return //  if(startPage + 10 > lastPage) return === if(startPage + 10 <= lastPage)
        setStartPage((prev) => prev + 10)
        refetch({ page: startPage + 10 }) // 다음페이지 누를때마다 해당하는 페이지에(ex: 11페이지, 21페이지 등) 대한 목록을 보여줌!
    }

    return(
        <div>
            <h1>페이지네이션 연습!!!</h1>
            {data?.fetchBoards?.map((el)=>(
                <div key={el._id}>
                    {el.title} {el.writer}
                </div>
            ))}
            <span onClick={onClickPrevPage}>이전페이지</span>
            {/* 10개의 빈배열에 fill안의 값으로 전부 채워짐! */}           
            {new Array(10).fill(1).map(
                (_, index) => 
                index + startPage <= lastPage && (
                <span 
                key={index + startPage} // 현재 그려지고 있는 페이지
                onClick={onClickPage} 
                id={String(index + startPage)}
                >
                {` ${index + startPage} `}
                </span>    
            ))}
            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
    )
}