import { getMyDate } from "../../../src/commons/libraries/utils"
import {gql, useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import {BsPencilSquare} from 'react-icons/bs'
import {BoundaryContents, Boundary, BoundaryHeader,BtnBox, Register,
    Number,HeaderNumber,Title,HeaderTitle,Writer,HeaderWriter,
    CreatedAt,HeaderCreatedAt} from '../../../styles/boardList'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            title
            writer
            createdAt
        }
    }
`

//게시물 목록(List) 페이지
export default function fetchBoardsPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARDS)

    const boardRegister = () =>{
        router.push("/board/new")
    }

    const MoveToDetailBoard = (event) => {
        router.push(`/board/${event.target.id}`)
    }


    return(
        <>
        <Boundary>
            <BoundaryHeader>
                    <HeaderNumber>번호</HeaderNumber>
                    <HeaderTitle>제목</HeaderTitle>
                    <HeaderWriter>작성자</HeaderWriter>
                    <HeaderCreatedAt>날짜</HeaderCreatedAt>
            </BoundaryHeader>
                {data?.fetchBoards?.map((el, index) => (
                    <BoundaryContents key={el._id}>
                        <Number>{index + 1}</Number>
                        <Title id={el._id} onClick={MoveToDetailBoard}>{el.title}</Title>
                        <Writer>{el.writer}</Writer>
                        <CreatedAt>{getMyDate(el.createdAt)}</CreatedAt>
                    </BoundaryContents> //{Array.from(el.createdAt).slice(0,10).join("")}
                ))}
            
        </Boundary>
        <BtnBox>
        
            <Register onClick={boardRegister}>게시물 등록하기<BsPencilSquare size="44" color='blue'/></Register>
            
        </BtnBox>
        </>
    )

}