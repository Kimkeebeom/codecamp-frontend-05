// import { gql, useQuery } from "@apollo/client"
import { useState, MouseEvent } from "react"
import { Pagenation } from "./pagination.styles";

export default function Pagination(props: { count: number; refetch: (arg0: { page: number }) => void }) {
    const [startPage, setStartPage] = useState(1) // 초기페이지
    // const {data, refetch} = useQuery(FETCH_BOARDS, {variables: { page: 1 }})
    // const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        props.refetch({ page: Number(event.target.id) })        
    }

    const onClickPrevPage = () => {
        if(startPage === 1) return
        setStartPage((prev) => prev - 10)
        props.refetch({ page: startPage - 10 })
    }

    const onClickNextPage = () => {
        if(startPage + 10 > lastPage) return
        setStartPage((prev) => prev + 10)
        props.refetch({ page: startPage + 10 })
    }

    return(
        <div>
            <Pagenation onClick={onClickPrevPage}>{`👈`}</Pagenation>
            {new Array(10).fill(1).map(
                (_, index) => 
                index + startPage <= lastPage && (
                <Pagenation 
                key={index + startPage} // 현재 그려지고 있는 페이지
                onClick={onClickPage} 
                id={String(index + startPage)}
                >
                {` ${index + startPage} `}
                </Pagenation>    
            ))}
            <Pagenation onClick={onClickNextPage}>{`👉`}</Pagenation>
        </div>
    )
}