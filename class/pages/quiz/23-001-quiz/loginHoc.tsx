import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"
import { IMutation, IMutationLoginUserArgs } from "../../../src/commons/types/generated/types"
import { GlobalContext } from "../../_app"

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

export default function loginQuizPage(){
    const {setAccessToken} = useContext(GlobalContext)
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [loginUser] = useMutation< 
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
    >(LOGIN_USER)


    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    // LoginUser Api 요청하는 함수
    const onClickLogin = async () => {
        try {
            const result = await loginUser({
                variables: { 
                    email,
                    password
                }
            })
            const accessToken = result.data?.loginUser.accessToken || ""
            console.log(result.data?.loginUser.accessToken) 
            
            if(setAccessToken) { 
                setAccessToken(accessToken)   
                localStorage.setItem("accessToken",accessToken || "")
            }    
            // 로그인 성공 페이지로 이동하기!!
            router.push("./mainHoc")
        } catch (error) {
            if(error instanceof Error) Modal.error({content: error.message})
        }
        
    }

    return(
        <div>
            이메일: <input onChange={onChangeEmail} type="text" />
            비밀번호: <input onChange={onChangePassword} type="password"/>
            <button onClick={onClickLogin}>Login</button>
        </div>
    )
}