import {MouseEvent} from "react"

export default function HofPage(){

    const onClickChild = (e:string) => (event: MouseEvent<HTMLDivElement>) => {
        console.log(e)
    }

    return(
        <div>
            <h1>HOF 연습 페이지입니다!!!</h1>
            {["철수", "영희", "훈이"].map((e)=>(
                <div key={e} onClick={onClickChild(e)}>
                    {e}
                </div>
            ))}
        </div>
    )
}