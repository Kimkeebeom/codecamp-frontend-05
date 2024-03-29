import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage(){
    console.log("컨테이너가 렌더링됩니다!!")

    let countLet = 0;
    const [countState, setCountState] = useState(0)

    const aaa = useMemo(()=>{
        return Math.random() // 리턴값을 기억한다
    },[]) // 복잡한 계산을 할때 useMemo를 사용해서 변수에 저장해주는게 좋다.
    // const aaa = useMemo(()=> return Math.random() // 리턴값을 기억한다
    // ,[]) 위의 코드와 같음!
    console.log(aaa)

    const onClickCountLet = useCallback(() => {
        console.log(countLet + 1)
        countLet = countLet + 1 // countLet += 1 
    },[])

    const onClickCountState = useCallback(() => {
        // console.log(countState + 1)
        setCountState((prev) => prev + 1)
    },[]) // 다시 만들어지려면 defendency array를 사용해줘야한다?

    // useMeom로 useCallback 만들어보기!!
    // const onClickCountState = useMemo(()=>{
    //     return () => {
    //         console.log(countState + 1)
    //         setCountState(countState + 1)
    //     }
    // }, [])

    // 다시 원래 함수
    // const onClickCountState =() => {
    //     // console.log(countState + 1)
    //     setCountState((prev) => prev + 1)
    // }

    return(
        <div>
            <div>====================</div>
            <h1>이것은 컨테이너입니다!</h1>

            <div>카운트(let): {countLet}</div>
            <button onClick={onClickCountLet}>카운트(let) +1 올리기!</button>

            <div>카운트(state): {countState}</div>
            <button onClick={onClickCountState}>카운트(state) +1 올리기!</button>

            <div>====================</div>
            <MemoizationPresenterPage myCount={countState}/>
        </div>
    )
}
