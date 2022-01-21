// import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
mutation{
    createBoard(
      writer:"김기범",
      title:"핫식스인데",
      contents:"왜 안뜨겁지?"    
    ){
      _id
      number
      message   
    }
  }
`

export default function GraphqlMutationHard(){

    const [createMyboard] = useMutation(CREATE_BOARD)

    const requestMyboard = async() => {
        const result = await createMyboard({
            variables:{writer:"",
            title:"", 
            contents:""}
        })
        console.log(result.data.createBoard.message)

    }

    return(
        <>
            <button onClick={requestMyboard}>GRAPHQL-API 요청하기!</button>
        </>
    )

}