//등록 페이지
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'

export default function BoardWrite(props) {
    const router = useRouter()

    const [createMyBoard] = useMutation(CREATE_BOARD)
    // const [msg, setMsg] = useState("")
    const [updateMyBoard] = useMutation(UPDATE_BOARD)

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
            try{
                const result = await createMyBoard({
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
            } catch(error) {
                 console.log(error.message)
            }
        }
    }

    async function updateBoard(){
        // interface IMyUpdateBoardInput {
        //     title?: string
        //     contents?: string
        //   }
        //   const myUpdateBoardInput: IMyUpdateBoardInput = {}
        //   if(title) myUpdateBoardInput.title = title
        //   if(contents) myUpdateBoardInput.contents = contents
        
        try { 
            const Variables = {
                updateBoardInput: {},
                password: pwd,
                boardId: router.query.move
              }
        
              if(title !== "") Variables.updateBoardInput.title = title
              if(contents !== "") Variables.updateBoardInput.contents = contents
        
              await updateMyBoard({ variables: Variables })
          
              alert("수정이 완료되었습니다.")
              router.push(`/board/${router.query.move}`)
          } catch (error) {
            alert(error.message);
          }
    }

    const MoveToBoardList = () => {
        router.push("/board/list")
    }

    return(
        <BoardWriteUI
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
            user={user}
            password={password}
            subject={subject}
            issue={issue}
            regis={regis}
            updateBoard={updateBoard}
            MoveToBoardList={MoveToBoardList}
            writerError={writerError}
            pwdError={pwdError}
            titleError={titleError}
            contentsError={contentsError}
        />
    )
}