// 2진법 : 0과 1로 이루어진 숫자
// 10진법 : 0과 9로 이루어진 숫자
// 3진법 : 0과 1과 2로 이루어진 숫자

a = 125;                  // 125
String(a)                 // '125'
a = a.toString(3) // 진법 변환 (문자열로 받아온다.)  // '11122'

Number()       // 0
parseInt(a, 3) // 원래의 진법으로 변환(숫자 타입으로 받아온다.)  // 125
//===========================================================================

// 1. 3진법 뒤집기
function solution(n) {
    // 3진법으로 변환
    n = n.toString(3);
    
    // 앞뒤를 반전
    let reverse = "";
    for( let i = n.length - 1; i >= 0; i--){
        // console.log(i, n[i])
        reverse += n[i]
    }
    // 뒤집은 3진법 데이터를 10진법으로 변환
    return parseInt( reverse, 3 )
}

function solution(n) {
    // 3진법으로 변환
    n = n.toString(3)
         .split("")
         .reverse() // 배열의 순서를 뒤집어준다.
         .join("")
    
    return parseInt(n, 3)
}

// 2. 이진 변환 반복하기
function solution(s) {
    let count = 0; // 이진 변환 된 횟수
    let remove = 0; // 0이 제거된 횟수
    
    while( s !== "1" ){
        count++;
        
        let temp = ""
        for( let i = 0; i < s.length; i++) {
            if(s[i] === "0"){
                remove++;
                continue;
            }
            temp += s[i] // === "1"
        }
        
        console.log(s, temp, count, remove)
        s = temp.length;
        s = s.toString(2);
    }
    return [ count, remove ]
}

// 메서드 이용: recursion
function solution(s) {
    let [ count, remove ] = [0, 0]
    
    function recursion(s){
        if(s==="1"){
            return [count, remove]
        }        
        remove += s.split("").filter(el => el === "0").length;
        s = s.split("").filter(el => el === "1").length;
        
        count++;
        return recursion(s.toString(2))
    }
    return recursion(s)
}