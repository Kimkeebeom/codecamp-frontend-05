// [카카오인턴] 키패드 누르기
const [ leftNumbers, rightNumbers ] = [
    [1, 4, 7],
    [3, 6, 9]
]

function solution(numbers, hand) {
    let answer = "";
    
    // 현재 손가락의 위치를 저장
    const current = {
        "left" : 10, // *는 10
        "right" : 12 // #은 12
    }
    
    for(let i = 0; i < numbers.length; i++){
        if(leftNumbers.includes(numbers[i])){
            // 누를 번호가 왼쪽 키패드에 해당되는 경우(= 왼쪽 손가락으로 누른다)
            answer += "L"
        } else if(rightNumbers.includes(numbers[i])){
            // 누를 번호가 오른쪽 키패드에 해당되는 경우(= 오른쪽 손가락으로 누른다)
            answer += "R"
            current["right"] = numbers[i] // 오른족 손가락 위치 변환
        } else {
            // 가운데 번호를 누를 때
            const tempObj = {...current}
            // 객체 반복문 : for (in)
            for(let hand in tempObj){
                numbers[i] = numbers[i] === 0 ? 11 : numbers[i]
                let location = Math.abs(numbers[i] - tempObj[hand])
                
                if(location >= 3) {
                    location = Math.trunc(location / 3) + location % 3
                }
                if(tempObj["left"] === tempObj["right"]){
                    // 왼쪽 엄지손가락과 오른쪽 엄지손가락의 위치가 서로 동일한 경우
                    // 주로 사용하는 손가락으로 키패드를 누른다.
                    answer += hand === "left" ? "L" : "R"
                    current[hand] = numbers[i]
                } else {
                    if (tempObj["left"] > tempObj["right"]){
                        // 오른쪽 손가락의 위치가 더 가까운 경우
                        answer += "R";
                        current["right"] = numbers[i]
                    } else {
                        // 왼쪽 손가락의 위치가 더 가까운 경우
                        answer += "L"
                        current["Left"] = numbers[i]
                    }
                }
            }
        }
    }
    return answer
}

// 메서드 
const [ leftNumbers, rightNumbers ] = [
    [1, 4, 7],
    [3, 6, 9]
]

function solution(numbers, hand) {
    let answer = "";
    
    // 현재 손가락의 위치를 저장
    const current = {
        "left" : 10, // *는 10
        "right" : 12 // #은 12
    }
    return numbers.reduce((acc, cur) => {
        let [ useFinger, target, number] = ["", "", 0]
        if(leftNumbers.includes(cur)){
            [useFinger, target, number]=["L", "left", cur]
        } else if(rightNumbers.includes(cur)){
            [useFinger, target, number] = ["R", "right", cur]
        } else {
            const fingers = Object.entries(current).reduce((acc2, cur2)=> {
                const targetHand = cur2[0]
                cur = cur === 0 ? 11 : cur
                let location = Math.abs(cur - cur2[1])
                if(location > 2){ // location >= 3
                    location = Math.trunc(location / 3) + location % 3
                }
                
                acc2[targetHand] = location;
                return acc2
            }, {})
            if(fingers["left"] === fingers["right"]){
                [useFinger, target, number] = [
                    hand === "right" ? "R" : "L",
                    hand === "right" ? hand : "left",
                    cur
                ];
            } else if(fingers["left"]>fingers["right"]){
                [useFinger, target, number] = ["R", "right", cur]
            } else {
                [useFinger, target, number] = ["L", "left", cur]
            }
        }
        
        current[target] = number
        return acc + useFinger
    }, "")
}