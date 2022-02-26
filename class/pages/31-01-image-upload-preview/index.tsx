import { ChangeEvent, useState } from "react"

export default function ImageUploadPreviewPage(){
    const [imageUrl, setImageUrl] = useState("")

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log(file)

        if(!file) {
            alert("파일이 없습니다!")
            return
        }
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (data) => {
            // 👇 data.target?.result의 타입이 string이라면 중괄호 안의 코드를 실행해줘
            if(typeof data.target?.result === "string"){ 
                console.log(data.target?.result)
                setImageUrl(data.target?.result || "")
            }
        }
    }

    return(
        <div>
            <img src={imageUrl} />
            <input type="file" onChange={onChangeFile}/>
        </div>
    )
}