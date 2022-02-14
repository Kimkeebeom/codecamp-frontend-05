import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"
import { GlobalContext } from "../_app"

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

export default function LoginPage(){
    const {setAccessToken} = useContext(GlobalContext)
    const router = useRouter()


    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")

    const [loginUser] = useMutation(LOGIN_USER)

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLogin = async () => {
        try {
            const result = await loginUser({
                variables: { 
                    email,
                    password
                }
            })
            console.log(result.data?.loginUser.accessToken) 
            if(setAccessToken){
                setAccessToken(result.data?.loginUser.accessToken || "")
            }
            router.push("/22-002-quiz")
        } catch (error) {
            if( email === "" || password === "" ){
            router.push("/22-001-quiz")
            Modal.error({content: "로그인을 먼저 해주세요!"})
            }          
        }        
    }

    return(
        <div>
            이메일: <input onChange={onChangeEmail} type="text" placeholder="이메일 주소를 입력해주세요"/>
            <br/>
            비밀번호: <input onChange={onChangePassword} type="password" placeholder="비밀번호를 입력해주세요"/>
            <br/>
            <button onClick={onClickLogin}>Login</button>
        </div>
    )
}