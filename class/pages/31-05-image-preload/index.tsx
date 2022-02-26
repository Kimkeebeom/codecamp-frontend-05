import { useEffect, useRef, useState } from "react"

export default function ImagePreloadPage(){
    const [loaded, setLoaded] = useState(false)
    const [imgTag,setImgTag] = useState<HTMLImageElement>()
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const img = new Image() // 이미지 태그를 만들어주는 것
        img.src = "https://storage.googleapis.com/freeboard-gchoi/Honeycam%202017-05-05%2014-46-30.gif"
        img.onload = () => {
            setImgTag(img)
        }
    }, [])

    const onClickImagePreLoad = () => {
        if(imgTag) divRef.current?.appendChild(imgTag)
    }

    const onClickImageLoad = () => {
        setLoaded(true);
    }

    return(
        <div>
            =====================이미지 프리로드=====================
            <div ref={divRef}></div>
            <button onClick={onClickImagePreLoad}>이미지 프리로드</button>
            <br/>
            =====================이미지 일반로드=====================
            <br/>
            {loaded && <img src="https://storage.googleapis.com/freeboard-gchoi/Honeycam%202017-05-05%2014-46-30.gif"/>}
            <button onClick={onClickImageLoad}>이미지 일반로드</button>
        </div>
    )
}