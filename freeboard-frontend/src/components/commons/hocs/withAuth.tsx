import { Modal } from "antd"
import { useRouter } from "next/router"
import { useEffect } from "react"

// @ts-ignore => 타입스크립트 무시해주는 명령어. 주석처리해줘야 적용됨
export const withAuth = (Component) => (props) => { // 타입스크립트는 generic 배우고 적용해줄 예정!
    const router = useRouter()

    useEffect(() => {
        if(!localStorage.getItem("accessToken")){
            Modal.warning({content: "회원전용 페이지입니다"})
            router.push('/members/login/login.container')
        }
    },[])

    return <Component {...props} />
}