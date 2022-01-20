import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String,  $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationArgsMytest(){

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [msg, setMsg] = useState(""); //등록이 잘 되었는지 페이지 화면에서 보여줌
    const [createMyboard] = useMutation(CREATE_BOARD);

    const registerMyboard = async() => {
        const result = await createMyboard({
            variables:{writer: myWriter,
            title: myTitle, 
            contents: myContents}
        })
        console.log(result.data.createBoard.message)
        setMsg(result.data.createBoard.message)
    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
    }

    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
    }

    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
    }

    return(
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br/>
            제목: <input type="text" onChange={onChangeMyTitle} /><br/>
            내용: <input type="text" onChange={onChangeMyContents} /><br/>
            <button onClick={registerMyboard}>등록하기</button>
            <div>{msg}</div>
        </>
    );

}