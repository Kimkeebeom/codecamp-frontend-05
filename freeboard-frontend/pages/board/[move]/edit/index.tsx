import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";


const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
    }
  }
`

//수정(Edit) 페이지
export default function BoardEditPage(){

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.move }
      })

    return <BoardWrite isEdit={true} data={data}/>

}