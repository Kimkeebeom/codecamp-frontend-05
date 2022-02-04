import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

// interface Istate {
//     count: number;
// }

export default function FunctionLifecycleRefPage(){
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null) // 태그랑 연결 시킬 수 있는 변수! 함수형에서는 초기값 null을 넣어줘야 한다!

    const [count, setCount] = useState(0)

    // componentDidMount와 동일!!
    useEffect(() => {
        console.log('마운트됨!!!')
        inputRef.current?.focus()

        // componentWillUnmount와 동일!!
        return () => {
            console.log("여기서 나갈래요!!")
        }
    }, []) // [] 의존성 배열 : dipendence array / count가 바뀌었을때만 다시 실행되는 것! 
    // 리턴부분 html 부분이 다 실행되고 나서 한번만 실행이 되는 부분!

    // componentDidUpdate 기능과 비슷!!!
    useEffect(() => {
        console.log('수정되고 다시 그려짐!!!')
    }) // 뭐 하나라도 바뀌면 매번 실행!

    const onClickCounter = () => {
        console.log(count)
        setCount((prev) => (prev + 1)) //component 안에는 setState라는 기능이 포함되어 있어서 class 함수안에 setState가 없어도 사용이 가능하다. 
        console.log('카운터를 클릭하셨습니다!!')
    }

    const onClickMove = () =>{
        router.push("/")
    }
    
    console.log("나는 언제 실행되게??") // componentDidMount, useEffect와 비교해보기!

        return( // class에서는 render부분에 해당!
            <div>
                <input type="text" ref={inputRef}/>
                <div>현재카운트: {count}</div>
                <button onClick={onClickCounter}>카운트 올리기!!</button>
                <button onClick={onClickMove}>나가기</button>
            </div>
        )
}