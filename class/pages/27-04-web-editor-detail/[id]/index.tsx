import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"
import Dompurify from 'dompurify'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function webEditorDetailPage(){
    const router = useRouter()
    const {data} = useQuery<
    Pick<IQuery, 'fetchBoard'>,
    IQueryFetchBoardArgs
    >(FETCH_BOARD, 
        {variables: {boardId: String(router.query.id)}}
    )
    
    
    return(
        <div>
            <div>작성자: {data?.fetchBoard.writer} </div>
            <div>제목: {data?.fetchBoard.title} </div>
            {process.browser &&(
                <div dangerouslySetInnerHTML={{
                    __html: String(data?.fetchBoard.contents)
                }}></div>
            )}
        </div>        
    )
}

// playground XSS 공격
// "<img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))'/>"