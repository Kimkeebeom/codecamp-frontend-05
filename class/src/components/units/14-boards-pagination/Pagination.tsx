import { useState } from "react"

export default function Pagination(props) {
    const [startPage, setStartPage] = useState(1) // 초기페이지

    const onClickPage = (event) => {
       props.refetch({ page: Number(event.target.id) })        
    }

    const onClickPrevPage = () => {
        if(startPage === 1) return // 시작페이지가 1페이지면 여기서 끝내줘!!!!
        setStartPage((prev) => prev - 10)
        props.refetch({ page: startPage - 10 }) // 이전페이지 누를때마다 해당하는 처음 페이지에(ex: 11페이지, 21페이지 등) 대한 목록을 보여줌!
    }

    const onClickNextPage = () => {
        if(startPage + 10 > props.lastPage) return //  if(startPage + 10 > lastPage) return === if(startPage + 10 <= lastPage)
        setStartPage((prev) => prev + 10)
        props.refetch({ page: startPage + 10 }) // 다음페이지 누를때마다 해당하는 페이지에(ex: 11페이지, 21페이지 등) 대한 목록을 보여줌!
    }
    
    return(
        <div>
            <span onClick={onClickPrevPage}>이전페이지</span>
                {/* 10개의 빈배열에 fill안의 값으로 전부 채워짐! */}           
                {new Array(10).fill(1).map(
                    (_, index) => 
                    index + startPage <= props.lastPage && (
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