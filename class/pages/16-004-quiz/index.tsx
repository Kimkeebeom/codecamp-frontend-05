import axios from "axios";
import { useEffect, useState } from "react";

export default function DogImage(){
    const [image, setImage] = useState("")

    const getDogImage = async() => {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random")
        setImage(result.data.message) 
    }
    
    useEffect(()=>{
        getDogImage()
    }) // 의존성 배열을 없애면 사진이 자동으로 바뀐다!! ㄹㅇ신기방기!!

    return(
        <>
            <img src={image}/>
        </>
    )
}