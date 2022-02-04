import { useEffect, useState } from "react"
import axios from "axios"

export default function OpenapiPage(){
    const [dogurl, setDogUrl] = useState("")

    useEffect(() => {
        const fetchDog = async () => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
        // console.log(result.data.message)
        setDogUrl(result.data.message)
        }
        fetchDog()    
    }, []) // 한번만 요청되기 때문에 2번이상 실행되지 않는다!!

    return(
        <div>
            <div>오픈API연습</div>
            <img src={dogurl} />
        </div>
    )

}