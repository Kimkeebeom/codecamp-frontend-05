// 댓글 등록 페이지

import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types"
import { CREATE_BOARD_COMMENT } from './BoardCommentsWrite.query'
import BoardCommentWriteUI from './BoardCommentsWrite.presenter'
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentsList.query"
import {Modal} from "antd"

export default function BoardCommentWrite(){

    const router = useRouter();

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [contents, setContents] = useState("")
    const [star, setStar] = useState(0)

    const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">, // 데이터 타입
    IMutationCreateBoardCommentArgs // arguement 타입
    >(CREATE_BOARD_COMMENT)

    function onChangeWriter(event: ChangeEvent<HTMLInputElement>){
        setWriter(event.target.value)
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>){
        setContents(event.target.value)
    }

    function onChangeStar(value: number) {
        setStar(value);
      }

    async function onClickRegis(){
        try{
            await createBoardComment({
                variables:{
                    createBoardCommentInput:{
                        writer: writer,
                        password: password,
                        contents: contents,
                        rating: star
                    }, boardId: String(router.query.move) 
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables:{ boardId: String(router.query.move)}
                    },
                ],
            })
            setWriter("")
            setPassword("")
            setContents("")
            Modal.success({content: "댓글이 등록되었습니다."})
        } catch(error){
            alert(error.message)
        }
    }
    

    return(
        <BoardCommentWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeStar={onChangeStar}
        onClickRegis={onClickRegis}
        writer={writer}
        password={password}
        contents={contents}
        />
    )

}