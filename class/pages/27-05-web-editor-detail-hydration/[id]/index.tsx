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
            {/* <div style={{color: "red"}}>작성자: {data?.fetchBoard.writer}</div>
            {process.browser ? (
                <div style={{color: "green"}}>제목: {data?.fetchBoard.writer}</div>
            ) : (
                <div style={{color: "green"}}/> // hydration 문제 해결 해주는 방법 => {proccess.browser ? (<div></div>) : (</div>)}
            )}
            <div style={{color: "blue"}}>내용: 반갑습니다!</div> */}

            <div style={{color: "red"}}>작성자: {data?.fetchBoard.writer} </div>
            <div style={{color: "green"}}>제목: {data?.fetchBoard.title} </div>
            {process.browser ?(
                <div dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(String(data?.fetchBoard.contents))
                }}
            />
            ) : (
                <div/>
            )}
            
        </div>        
    )
}