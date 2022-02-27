import {getMyDate} from "../../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import {BsPencilSquare} from 'react-icons/bs'
import Pagination from "../../pagination/pagination.container"
import { withAuth } from "../../../commons/hocs/withAuth"
import { v4 as uuidv4 } from "uuid";
import SearchPage from "../../search/search.container"
// import { ReactChild, ReactFragment, ReactPortal, MouseEventHandler } from "react"

const BoardListUI = (props) => {
    
    return(
        <>
        <S.H1>{props.userInfo?.name}님 환영합니다!!</S.H1>
        <S.Boundary>
            <SearchPage
                refetch={props.refetch}
                refetchBoardsCount={props.refetchBoardsCount}
                onChangeKeyword={props.onChangeKeyword}
            />
            <S.BoundaryHeader>
                    <S.HeaderNumber>번호</S.HeaderNumber>
                    <S.HeaderTitle>제목</S.HeaderTitle>
                    <S.HeaderWriter>작성자</S.HeaderWriter>
                    <S.HeaderCreatedAt>날짜</S.HeaderCreatedAt>
            </S.BoundaryHeader>
        {props.data?.fetchBoards?.map((el, index) => (
            <S.BoundaryContents key={el._id}>
                <S.Number>{index + 1}</S.Number>
                <S.Title id={el._id} style={{color:"white"}} onClick={props.MoveToDetailBoard}>
                    {/* 👇검색했을때 검색한 키워드 fetch값을 보여주는 코드 */}
                    {el.title.replaceAll(props.keyword, `#$%${props.keyword}#$%`).split("#$%").map((el)=>(
                        <S.Word key={uuidv4()} isMatched={el === props.keyword ? true : false}> 
                            {el}
                        </S.Word>
                    ))} 
                </S.Title>
                <S.Writer>{el.writer}</S.Writer>
                <S.CreatedAt>{getMyDate(el.createdAt)}</S.CreatedAt>
            </S.BoundaryContents> //{Array.from(el.createdAt).slice(0,10).join("")}
                ))}        
        </S.Boundary>
        <S.Footer>
            <Pagination refetch={props.refetch} count={props.count} />
            {/* <S.BtnBox> */}
            <S.Register onClick={props.boardRegister}>게시물 등록하기<BsPencilSquare size="44" color='skyblue'/></S.Register>
            {/* </S.BtnBox> */}
        </S.Footer>        
        </>
    )
}

export default withAuth(BoardListUI)
