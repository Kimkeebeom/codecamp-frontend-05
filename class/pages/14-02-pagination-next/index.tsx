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

export default function PaginationNextPage(){
    const [startPage, setStartPage] = useState(1) // 초기페이지

    const {data, refetch} = useQuery(FETCH_BOARDS, {variables: { page: 1 }})

    const onClickPage = (event) => {
        refetch({ page: Number(event.target.id) })        
    }

    const onClickPrevPage = () => {
        setStartPage((prev) => prev - 10)
    }

    const onClickNextPage = () => {
        setStartPage((prev) => prev + 10)
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
            {new Array(10).fill(1).map((_, index)=>(
                <span 
                key={index + startPage} 
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