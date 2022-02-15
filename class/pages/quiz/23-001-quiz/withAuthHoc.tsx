import { Modal } from "antd"
import { useRouter } from "next/router"
import { useEffect } from "react"

// @ts-ignore
export const withAuthHocQuiz = (Component) => (props) => {
    const router = useRouter()

    useEffect(() => {
        if(!localStorage.getItem("accessToken")){
            Modal.warning({content: "회원전용 페이지입니다"})
            router.push('./loginHoc')
        }
    },[])

    return <Component {...props} />
}