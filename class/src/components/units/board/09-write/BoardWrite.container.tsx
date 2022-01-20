import axios from 'axios'
import {useState} from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'

//등록하기 페이지
export default function BoardWrite(props){
    console.log("dad",props.data)
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [aaa, setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)
    const [www] = useMutation(UPDATE_BOARD)
    //등록하기 함수
    const zzz = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")
        const result = await qqq({ 
            variables: { writer: myWriter, title: myTitle, contents: myContents } 
        })
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)

        router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }
    //수정하기 함수 xxx
    const xxx = async () => {
        console.log('수정하기를 클릭하셨군요!!!')
        interface IMyVariables {
            number?: number
            writer?: string
            title?: string
            contents?: string
        }

        const myVariables: IMyVariables = { number: Number(router.query.mynumber) 
        }

        if(myWriter !== "") myVariables.writer = myWriter
        if(myTitle !== "") myVariables.title = myTitle
        if(myContents !== "") myVariables.contents = myContents

        await www({ //꼭 const result = await www 이런식으로 변수에 담지 않아도 된다.
            variables: myVariables
        })
        //console.log(result.data.updateBoard.message)
        router.push(`/09-01-boards/${router.query.mynumber}`)
    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
        if(event.target.value && myTitle && myContents){
            setIsActive(true)
        }
    }
    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
        if(myWriter && event.target.value && myContents){
            setIsActive(true)
        }
    }
    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
        if(myWriter && myTitle && event.target.value){
            setIsActive(true)
        }
    }

    return(
        <BoardWriteUI 
            bbb={aaa}
            ccc={zzz} //등록하기
            xxx={xxx} //수정하기 함수
            ddd={onChangeMyWriter}
            eee={onChangeMyTitle}
            fff={onChangeMyContents}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}  
        />
    )
}