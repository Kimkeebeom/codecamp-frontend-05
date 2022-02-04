import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Quiz01(){
    const[isChange, setIschange] = useState(false)
    const router = useRouter()

    useEffect(()=> {
        alert("Changed!!!!")
        return () => {
            alert("ByeBye!!!")
        }
    }, [])

    useEffect(()=>{
        alert("Rendered!!!")
    },[isChange])

    const onClickChange = () => {
        setIschange(true)
    }

    const onClickMove = () => {
        router.push("/")
    }

    return(
        <div>
            <button onClick={onClickChange}>변경</button>
            <button onClick={onClickMove}>이동</button>
        </div>
    )

}