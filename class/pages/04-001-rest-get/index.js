import axios from "axios";
import {useState} from 'react'

export default function RestGet(){
    const [user, setUser] = useState("")

    const UserGet = async () => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result.data)
        setUser(result.data[7].name)
    }

    return(
        <>
            <button onClick={UserGet}>REST-API 요청하기</button>
            <div>{user}</div>
        </>
    )

}