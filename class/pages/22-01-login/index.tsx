import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"
import { IMutation, IMutationLoginUserArgs } from "../../src/commons/types/generated/types"
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
            console.log(result.data?.loginUser.accessToken)
            // setAccessToken이 있으면 보여줘! token이 없으면 ""에 넣어주세요!
            if(setAccessToken) setAccessToken(result.data?.loginUser.accessToken || "")

            // 로그인 성공 페이지로 이동하기!!
            router.push("/22-02-login-success")
        } catch (error) {
            // 타입스크립트 버젼에 따라 error부분에 밑줄이 그어져서 아래처럼 작성
            if(error instanceof Error) Modal.error({content: error.message})
        }
        
    }

    return(
        <div>
            {/* 이메일과 비밀번호를 state에 담아주고 이메일과 비밀번호를 변경했을때 onChange 함수를 만들어줘야함 */}
            이메일: <input onChange={onChangeEmail} type="text" /> 
            비밀번호: <input onChange={onChangePassword} type="password" />
            <button onClick={onClickLogin}>로그인하기!!!!</button>
        </div>
    )
}