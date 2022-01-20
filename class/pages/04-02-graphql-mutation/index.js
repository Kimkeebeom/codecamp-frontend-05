import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"김기범", title:"노제란?", contents:"댄서?ㄴㄴ 노드제이에스"){
        _id
        number
        message
        }
    }
`

export default function GraphqlMutations(){
    const [aaa, setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)
   
    const zzz = async() => {
        //const result = await axios.get("https:koreanjson.com/posts/1")
        const result = await qqq()
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    
    return ( 
        <>
            <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
            <div>{aaa}</div>
        </>
    )
}