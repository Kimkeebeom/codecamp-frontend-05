import * as S from "./BoardList.styles"
import InfiniteScroll from "react-infinite-scroller"
import { getMyDate } from "../../../../commons/libraries/date/utils"

export default function BoardListUI(props){
    return(
        <>
        <S.Boundary>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true || false}>
                {props.data?.fetchBoards?.map((el) => (
                    <S.BoundaryContents key={el._id} el={el}>
                        <S.Title id={el._id} onClick={props.MoveToDetailBoard}>{el.title}</S.Title>
                        <S.CreatedAt>{getMyDate(el.createdAt)}</S.CreatedAt>
                    </S.BoundaryContents> 
                ))}
            </InfiniteScroll>        
        </S.Boundary>
        <S.Footer>
        </S.Footer>
        
        </>
    )

}