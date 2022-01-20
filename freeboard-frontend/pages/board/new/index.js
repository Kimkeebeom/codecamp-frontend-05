import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

import {Label, Name, Password, Title, Content, Address, 
    Register, Combined, Writer,Pwd, Spancombined, 
    Wrapper, MainTitle, WrapperHeader, Youtube, WrapperAddress
    ,Search,AddressText,WrapperAddressText, WrapperPhoto, 
    PhotoUpload, Click, SubTitle, SubContent, SubAddress, 
    SubYoutube, SubPhoto, Radio, SubRadio, NameError, PasswordError, 
    CntError, TitleError, Span} from '../../../styles/boardindex'

    const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
        }
    }
`
    
export default function boardPage() {
    const router = useRouter()

    const [createMyboard] = useMutation(CREATE_BOARD)
    const [msg, setMsg] = useState("")

    const [writer, setWriter] = useState("")
    const [writererror, setWritererror] = useState("")

    const [pwd, setPwd] = useState("")
    const [pwderror, setPwderror] = useState("")

    const [title, setTitle] = useState("")
    const [titleerror, setTitleerror] = useState("")

    const [contents, setContents] = useState("")
    const [contentserror, setContentserror] = useState("")

    //등록했을 때, 서버에 저장을 요청하는 기능
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
            setWritererror("");
        }
    }

    function password(event){
        setPwd(event.target.value)
        if(event.target.value !== ""){
            setPwderror("");
        }
    }

    function subject(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleerror("");
        }
    }

    function issue(event){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentserror("");
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
            setWritererror("작성자를 입력해주세요.")
        }
        if(pwd === ""){
            setPwderror("비밀번호를 입력해주세요.")
        }
        if(title === ""){
            setTitleerror("제목을 입력해주세요.")
        }
        if(contents === ""){
            setContentserror("내용을 입력해주세요.")
        }
        if(writer !== "" && Pwd !== "" && Title !== "" && contents !== ""){
            // try{
                const result = await createMyboard({
                    variables:{
                        createBoardInput:{
                            writer:writer,
                            password:pwd,
                            title:title,
                            contents:contents}}
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
        <Wrapper>
            <WrapperHeader>
                <MainTitle>게시물 등록</MainTitle>
            </WrapperHeader>    
        
           <Spancombined>
                <Writer>작성자</Writer>
                <Pwd>비밀번호</Pwd>
            </Spancombined>
            <Combined>
                <Name type="text" onChange={user} placeholder='이름을 적어주세요' />
                <NameError>
                    <Span>{writererror}</Span>
                </NameError>
                <Password type="password" onChange={password} placeholder='비밀번호를 입력해주세요'/>
                <PasswordError>
                    <Span>{pwderror}</Span>
                </PasswordError>
            </Combined>
            

            <SubTitle>제목</SubTitle>
            <Title type="text" onChange={subject} placeholder='제목을 작성해주세요'/>
            <TitleError>
                <Span>{titleerror}</Span>
            </TitleError>

            <SubContent>내용</SubContent>
            <Content type="textarea" onChange={issue} placeholder='내용을 작성해주세요'/>
            <CntError>
                <Span>{contentserror}</Span>
            </CntError>

            <SubAddress>주소</SubAddress>
            <WrapperAddress>
                <Address type="address" placeholder='07250'/>
                <Search>
                    <Click>우편번호 검색</Click>
                </Search>
            </WrapperAddress>
            <WrapperAddressText>
                    <AddressText type="address"/>
                    <AddressText type="address"/>
            </WrapperAddressText>


            <SubYoutube>유튜브</SubYoutube>
            <Youtube type="text" placeholder='링크를 복사해주세요'/>

            <SubPhoto>사진 첨부</SubPhoto>
            <WrapperPhoto>
                <PhotoUpload>+</PhotoUpload>
                <PhotoUpload>+</PhotoUpload>
                <PhotoUpload>+</PhotoUpload>
            </WrapperPhoto>

            <SubRadio>메인 설정</SubRadio>
            <Radio>
            <input type="radio"/>유튜브
            <input type="radio"/>사진
            </Radio>

            <Register onClick={regis}>등록하기</Register>
            <div>{msg}</div>

        </Wrapper>
    )
}