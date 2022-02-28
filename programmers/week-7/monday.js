// 1. 비밀지도
function solution(n, arr1, arr2) {
    const answer = []
    
    for(let i=0; i<arr1.length; i++){
        answer[i] = "";
        // 지도 1을 해독한 결과(2진법 변환)
        const map1 = arr1[i].toString(2).padStart(n, "0")
        // 지도 2를 해독한 결과(2진법 변환)
        const map2 = arr2[i].toString(2).padStart(n, "0")
        
       for(let l=0; l<map1.length; l++){
           // 둘중 하나라도 벽(1)이라면
           if(map1[l] === "1" || map2[l] === "1"){
               answer[i] += "#"
           // 둘다 공백이라면
           } else {
               answer[i] += " ";
           }
       }
    }
    return answer;
}

// 메서드 이용
function solution(n, arr1, arr2) {
    const answer = arr1.map( (map1, i) => {
        map1 = map1.toString(2).padStart(n, "0")
        const map2 = arr2[i].toString(2).padStart(n, "0")
        
        const result = map1.split("").reduce((acc, cur, i) => {
            return acc += (cur === "1" || map2[i] === "1")
                ? "#"
                : " "
        }, "")
        return result;
    })
    return answer;
}