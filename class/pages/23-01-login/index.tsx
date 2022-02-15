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

    const [email, setEmail] = useState("") // 타입추론이 자동으로 된다.
    const [password, setPassword] = useState("")
    
    const [loginUser] = useMutation< // Mutation 같은 애들은 타입추론이 안돼서 타입을 입력해줘야 한다.
    Pick<IMutation, "loginUser">, // Omit => 특정 데이터 빼고 나머지 다 가져와줘! Partial => 부분적으로 필요하고 필요 없을 수도 있다! ':' 앞에 ?를 붙여서 가져와줘!(유틸리티 타입)
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
            console.log(result.data?.loginUser.accessToken) // result 안에는 data가 있을거고 data안에 loginUser가 있고 그 안에 accessToken이 있다.
            // setAccessToken이 있으면 보여줘! token이 없으면 ""에 넣어주세요!
            if(setAccessToken) { 
                setAccessToken(accessToken) // 새로고침하게 되면 로그인 데이터가 사라짐! 유지방법은 추후에 배울 예정!
                // localStorage.setItem("aaa","철수")
                // localStorage.getItem("aaa") // key만 작성 => 로컬 스토리지에서 뽑아오는 것!
                localStorage.setItem("accessToken",accessToken || "")

                console.log("==========================")
                console.log(localStorage.getItem("accessToken"))
                console.log("==========================")
            }    
            // 로그인 성공 페이지로 이동하기!!
            router.push("/23-02-login-localstorage-success")
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