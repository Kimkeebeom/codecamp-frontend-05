import { Modal } from "antd";
import router from "next/router";
import { useEffect } from "react";

export function useAuth(){

    useEffect(() => {
        if(!localStorage.getItem("accessToken")){
            Modal.warning({content: "회원전용 페이지입니다"})
            router.push('/23-04-login-check')
        }
    },[])

}