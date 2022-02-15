import { useRouter } from "next/router"
import { useEffect } from "react"

// @ts-ignore => 타입스크립트 무시해주는 명령어. 주석처리해줘야 적용됨
export const withAuth = (Component) => (props) => { // 타입스크립트는 generic 배우고 적용해줄 예정!
    const router = useRouter()

    useEffect(() => {
        if(!localStorage.getItem("accessToken")){
            alert("로그인을 먼저 해주세요!")
            router.push('/23-04-login-check')
        }
    },[])

    return <Component {...props} />
}