import { Modal } from "antd"
import { useRouter } from "next/router"
import { ComponentType, useEffect } from "react"

export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
    const router = useRouter()

    useEffect(() => {
        if(!localStorage.getItem("accessToken")){
            Modal.warning({content: "회원전용 페이지입니다"})
            router.push('/23-04-login-check')
        }
    },[])

    return <Component {...props} />
}