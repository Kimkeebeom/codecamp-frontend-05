import axios from "axios"

export default function GraphqlRestPage(){

    const onclickGraphql = () => {
        axios.post(
            "http://backend05.codebootcamp.co.kr/graphql",{
                query:
                `mutation createBoard { 
                    createBoard(
                        createBoardInput: { 
                            writer: "깨비", 
                            password: "1234", 
                            title: "제목", 
                            contents: "내용" 
                        }
                    ){ 
                        _id, writer 
                    }   
                }`
            }
        )
    }

    return(
        <button onClick={onclickGraphql}>GraphQL Axios Test!!</button>
    )
}