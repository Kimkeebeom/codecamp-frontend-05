// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String,  $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationArgsInput(){

    const [aaa, setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontent, setMyContent] = useState("")
   
    const zzz = async() => {
        // const result = await axios.get("https:koreanjson.com/posts/1")
        const result = await qqq({
            variables: {writer: mywriter, title: mytitle, contents: mycontent}
        })
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    
    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
    }

    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
    }

    const onChangeMyContent = (event) => {
        setMyContent(event.target.value)
    }

    return ( 
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br/>
            제목: <input type="text" onChange={onChangeMyTitle} /><br/>
            내용: <input type="text" onChange={onChangeMyContent} /><br/>
            <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
            <div>{aaa}</div>
        </>
    )
}