import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'

export default function BoardWrite() {
    const router = useRouter()

    const [createMyboard] = useMutation(CREATE_BOARD)
    // const [msg, setMsg] = useState("")

    const [isActive, setIsActive] = useState(false)

    const [writer, setWriter] = useState("")
    const [writerError, setWriterError] = useState("")

    const [pwd, setPwd] = useState("")
    const [pwdError, setPwdError] = useState("")

    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState("")

    const [contents, setContents] = useState("")
    const [contentsError, setContentsError] = useState("")

    // 등록했을 때, 서버에 저장을 요청하는 기능
    // const regisA = async() => {
    //     const result = await createMyboard({
    //         variables:{createBoardInput:{writer:writer,password:pwd,title:title,contents:contents}}
    //     })
        // console.log(result.data.createBoard.message)
        // setMsg(result.data.createBoard.message)
    //}


    function user(event){
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterError("");
        }
        if(event.target.value && pwd && title && contents){
            setIsActive(true)
          } else {
            setIsActive(false)
          }
    }

    function password(event){
        setPwd(event.target.value)
        if(event.target.value !== ""){
            setPwdError("");
        }
        if(writer && event.target.value && title && contents){
            setIsActive(true)
          } else {
            setIsActive(false)
          }
    }

    function subject(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("");
        }
        if(writer && pwd && event.target.value && contents){
            setIsActive(true)
          } else {
            setIsActive(false)
          }
    }

    function issue(event){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentsError("");
        }
        if(writer && pwd && title && event.target.value){
            setIsActive(true)
          } else {
            setIsActive(false)
          }
    }

    // function regis(){
        
    //     regisA();
        // let check = true

        // if(writer.length <= 0 === true){
        //     setWritererror("이름을 적어주세요")
        //     check = false
        // } 
        // if(pwd.length < 1 === true){
        //     setPwderror("비밀번호를 입력해주세요")
        //     check = false
        // }
        // if(title.length < 1 === true){
        //     setTitleerror("제목을 입력해주세요")
        //     check = false
        // }
        // if(contents.length < 1 === true){
        //     setContenterror("내용을 입력해주세요")
        //     check = false
        // }
        // if(writer.length )

    // }

    async function regis() {
        if(writer === ""){
            setWriterError("작성자를 입력해주세요.")
        }
        if(pwd === ""){
            setPwdError("비밀번호를 입력해주세요.")
        }
        if(title === ""){
            setTitleError("제목을 입력해주세요.")
        }
        if(contents === ""){
            setContentsError("내용을 입력해주세요.")
        }
        if(writer !== "" && pwd !== "" && title !== "" && contents !== ""){
            // try{
                const result = await createMyboard({
                    variables:{
                        createBoardInput:{
                            writer:writer,
                            password:pwd,
                            title:title,
                            contents:contents,
                            }}
                })
                alert("게시물이 등록되었습니다.")
                console.log(result.data.createBoard._id)
                router.push(`/board/${result.data.createBoard._id}`)
            // } catch(error) {
            //     console.log(error.message)
            // }
        }

        
    }

    return(
        <BoardWriteUI
            isActive={isActive}
            user={user}
            password={password}
            subject={subject}
            issue={issue}
            regis={regis}
            writerError={writerError}
            pwdError={pwdError}
            titleError={titleError}
            contentsError={contentsError}
        />
    )
}