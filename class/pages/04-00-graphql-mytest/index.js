import { useMutation, gql} from "@apollo/client";
import { useState } from "react";

//graphql 게시물 코드 생성
const CREATE_BOARD = gql`
mutation{
    createBoard(
      writer:"KBstar"
      title:"코푸는코린이"
          contents:"줄여서 푸린이ㅋ"
    ){
      _id
      message
      number
    }
  }
`
export default function GraphqlMyTest(){
    
    //mutation 코드 생성
    const [testboard] = useMutation(CREATE_BOARD)

    const submitboard = async() => {
        const result = await testboard({
            variables : {
                writer:"KBstar",
                title:"코푸는코린이",
                contents:"줄여서 푸린이ㅋ"
            }
        })
        console.log(result.data.createBoard.message)

    }

    return(
        <>
            <button onClick={submitboard}>게시물 등록!!</button>
        </>
    )
}