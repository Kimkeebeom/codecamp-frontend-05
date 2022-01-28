import {useState} from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
    // const [myWriter, setMyWriter] = useState("")
    // const [myTitle, setMyTitle] = useState("")
    // const [myContents, setMyContents] = useState("")
    const [inputs, setInputs] = useState({ writer:"", title:"", contents: ""})

    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async () => {
        const result = await qqq({ 
            variables: { ...inputs //writer: myWriter, title: myTitle, contents: myContents } 
        })
    }

    // const onChangeMyWriter = (event) => {
    //     // setMyWriter(event.target.value)
    //     setInputs({
    //         // writer: event.target.value,
    //         // title: inputs.title, // 기존의 것을 유지시켜줘야함
    //         // contents: inputs.contents // 기존의 것을 유지시켜줘야함
    //         ...inputs,
    //         // 여기서 대괄호를 지정해주는건 배열이 아님을 주의!
    //         [event.target.id]: event.target.value
    //     })
    //     event.target.id // writer
    // }
    // const onChangeMyTitle = (event) => {
    //     // setMyTitle(event.target.value)
    //     setInputs({
    //         // writer: inputs.writer, // 기존의 것을 유지시켜줘야함
    //         // title: event.target.value, 
    //         // contents: inputs.contents // 기존의 것을 유지시켜줘야함
    //         ...inputs,
    //         [event.target.id]: event.target.value
    //     })
    //     event.target.id // title
    // }
    
    // const onChangeMyContents = (event) => {
    //     setInputs({
    //         // writer: inputs.writer, // 기존의 것을 유지시켜줘야함
    //         // title: inputs.title, // 기존의 것을 유지시켜줘야함
    //         // contents: event.target.value
    //         ...inputs,
    //         [event.target.id]: event.target.value
    //     })
    //     event.target.id // contents
    // }
    const onChangesInputs = (event) => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value,
        });
    }

    return(
        <div>
            <div>스프레드 연산자 연습!!</div>
            <input type="text" id="writer" onChange={onChangesInputs}/>
            <input type="text" id="title" onChange={onChangesInputs}/>
            <input type="text" id="contents" onChange={onChangesInputs}/>
        </div>
    )
}