import {getMyDate} from "../../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import {BsPencilSquare} from 'react-icons/bs'
import Pagination from "../../pagination/pagination.container"

export default function BoardListUI(props){
    
    return(
        <>
        <S.Boundary>
            <S.BoundaryHeader>
                    <S.HeaderNumber>번호</S.HeaderNumber>
                    <S.HeaderTitle>제목</S.HeaderTitle>
                    <S.HeaderWriter>작성자</S.HeaderWriter>
                    <S.HeaderCreatedAt>날짜</S.HeaderCreatedAt>
            </S.BoundaryHeader>
                {props.data?.fetchBoards?.map((el, index) => (
                    <S.BoundaryContents key={el._id}>
                        <S.Number>{index + 1}</S.Number>
                        <S.Title id={el._id} onClick={props.MoveToDetailBoard}>{el.title}</S.Title>
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