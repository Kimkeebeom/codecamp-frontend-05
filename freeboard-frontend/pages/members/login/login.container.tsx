import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IMutation, IMutationLoginUserArgs } from "../../../src/commons/types/generated/types";
import { GlobalContext } from "../../_app";
import { yupResolver } from '@hookform/resolvers/yup'
import * as L from "./login.styles";
import * as yup from 'yup'

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

const FETCH_USER_LOGGED_IN = gql`   
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`

const schema = yup.object().shape({
    email: yup
    .string()
    .email('이메일 형식이 적합하지 않습니다.')
    .required('이메일은 필수 입력 사항입니다.'),
    password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다.")
})

interface FormValues{
    Email?: string,
    Password?: string,
}

export default function loginMainPage(){
    const { register, handleSubmit, formState } = useForm({
        mode:"onChange",
        resolver: yupResolver(schema)
    })

    const {setAccessToken, setUserInfo} = useContext(GlobalContext)
    const client = useApolloClient()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
    >(LOGIN_USER)

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        // console.log(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        // console.log(event.target.value,"외안되 눈참많이오네")
    }

    const onClickLogin = async () => {
        try {
            const result = await loginUser({
                variables: {
                    email,
                    password,
                }
            })
            const accessToken = result.data?.loginUser.accessToken || ""
            console.log(result.data?.loginUser.accessToken)

            const resultUserInfo = await client.query({
                query: FETCH_USER_LOGGED_IN,
                context: {
                    headers: {Authorization: `Bearer ${accessToken}`}
                }
            })
            const userInfo = resultUserInfo.data?.fetchUserLoggedIn

            if(setAccessToken) setAccessToken(accessToken)
            if(setUserInfo) setUserInfo(userInfo)

            localStorage.setItem("accessToken",accessToken || "")
            localStorage.setItem("userInfo",JSON.stringify(userInfo) || "")

            console.log(localStorage.getItem("accessToken"))
            console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"))

            router.push("/members/mypage")
        } catch (error) {
            if(error instanceof Error) Modal.error({content: error.message})
        }
    }

    return(
        <L.Wrapper>
            <L.InnerWrapper>
                <L.LogoBox>
                    KB LOGO
                </L.LogoBox>
                <L.LoginBox>
                <L.LoginBox onSubmit={handleSubmit(onClickLogin)}>
                    <L.EmailBox type="text" onChange={onChangeEmail} {...register("email")} placeholder="E-mail"/>    
                        <div style={{color:"white"}}>{formState.errors.email?.message}</div>     
                    <L.PwdBox  type="password" onChange={onChangePassword} {...register("password")} placeholder="Password"/>
                        <div style={{color:"white"}}>{formState.errors.password?.message}</div>  
                    <L.RadioBox>
                        <input type="radio"/> 로그인 상태 유지
                    </L.RadioBox>
                    <L.LoginBtn>로그인</L.LoginBtn>
                </L.LoginBox>          
                <L.BottomBox>
                    비밀번호 찾기 | 이메일 찾기 | 회원가입
                </L.BottomBox>
            </L.InnerWrapper>
        </L.Wrapper>
    )
}