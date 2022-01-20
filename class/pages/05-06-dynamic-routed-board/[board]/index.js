import {useRouter} from 'next/router'
import {gql, useQuery} from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function DynamicRoutedPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.board) }
    }) //query의 변수명은 data라는 이름만 설정이 가능하다. 그리고 {}를 써야한다.


    console.log(data)

    return(
        <div>
            <div>{router.query.board}번 게시글 페이지 이동완료!!</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div> 
        </div>
    )
}