// 싸이월드 때 했던 내용 복습
// setInterval(() => {

//     document.getElementById("timer")?.innerText = "2:59"

// }, 1000)

export default function TaskQueuePgae(){

    const onClcickTimer = () => {
        console.log("==========시작==========")

        // 비동기 작업 : 바로 실행되는 것이 아닌 로직(axios)
        setTimeout(() => {
             console.log("1초 뒤에 실행될 거예요!!")
        }, 1000)

        // callstack 로직
        let sum = 0
        for(let i=0; i<= 9000000000; i+=1){
            sum = sum + 1
        }

        console.log("===========끝===========")
    }

    return(
        <button onClick={onClcickTimer}>시작!!</button>
    )
}