// 싸이월드 때 했던 내용 복습
// setInterval(() => {

//     document.getElementById("timer")?.innerText = "2:59"

// }, 1000)

export default function TaskQueuePgae(){

    const onClcickTimer = () => {
        console.log("==========시작==========")

        // 비동기 작업(매크로큐에 들어감)
        setTimeout(() => {
             console.log("저는 setTimeout! 매크로큐! 0초 뒤에 실행될 거예요!!")
        }, 0)

        new Promise((resolve)=>{
            resolve("철수")
        }).then((res)=>
        console.log("저는 setTimeout! 마이크로큐! 0초 뒤에 실행될 거예요!! - 1")
        )

        // 비동기 작업(매크로큐에 들어감)
        setInterval(() => {
            console.log("저는 setInterval! 매크로큐! 0초마다 실행될 거예요!!")
       }, 0)

        // callstack 로직
        let sum = 0
        for(let i=0; i<= 9000000000; i+=1){
            sum = sum + 1
        }

        new Promise((resolve)=>{
            resolve("철수")
        }).then((res)=>
        console.log("저는 setTimeout! 마이크로큐! 0초 뒤에 실행될 거예요!! - 2")
        )

        console.log("===========끝===========")
    }

    return(
        <button onClick={onClcickTimer}>시작!!</button>
    )
}