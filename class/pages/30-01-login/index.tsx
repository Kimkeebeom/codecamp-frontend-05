import { gql, useApolloClient, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"
import { IMutation, IMutationLoginUserArgs } from "../../src/commons/types/generated/types"
import { GlobalContext } from "../_app"

const LOGIN_USER = gql`
    mutation loginUserExample($email: String!, $password: String!) {
        loginUserExample(email: $email, password: $password){
            accessToken
        }
    }
`

export default function LoginPage(){
    const {setAccessToken} = useContext(GlobalContext)
    const router = useRouter()

    const [email, setEmail] = useState("") // 타입추론이 자동으로 된다.
    const [password, setPassword] = useState("")
    
    const [loginUserExample] = useMutation< // Mutation 같은 애들은 타입추론이 안돼서 타입을 입력해줘야 한다.
    Pick<IMutation, "loginUserExample">, // Omit => 특정 데이터 빼고 나머지 다 가져와줘!
    // Partial => 부분적으로 필요하고 필요 없을 수도 있다! ':' 앞에 ?를 붙여서 가져와줘!(유틸리티 타입)
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
            // 로그인하기
            const result = await loginUserExample({
                variables: { 
                    email,
                    password
                }
            })
            // 글로벌스테이트에 저장하기
            const accessToken = result.data?.loginUserExample.accessToken || ""
            if(setAccessToken) setAccessToken(accessToken)
           
            // 로그인 성공 페이지로 이동하기!!
            router.push("/30-02-login-success")
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