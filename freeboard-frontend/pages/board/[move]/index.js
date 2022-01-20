import {useRouter} from 'next/router'
import {useQuery, gql} from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
        }
    }
`

export default function BoardDetail(){
    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD,{
        variables: {boardId: router.query.move}
    })

    console.log(data)
            //fetchBoard? : 게시물이 삭제 됐을 때, 이름이나 가격이 있으면 보여주거나 없으면 안보여주는 기능
    return( //data? : 옵셔널 체이닝(조건부랜더링) => data && data와 같은 의미로 데이터가 있을 때 데이터를 보여줘라는 기능
        <div>
            <div>작성자 : {data?.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div>내용 : {data?.fetchBoard?.contents}</div> 
        </div>    
    )
}