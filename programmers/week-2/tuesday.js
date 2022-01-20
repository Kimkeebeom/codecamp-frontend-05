//1. 짝수와 홀수

function solution(num) {
    if(num % 2 === 0) {
        //2로 나눴을 때의 나머지 값이 0일 때 짝수
        return "Even"
    } else { 
        //2로 나눴을 때의 나머지 값이 1일 때 홀수
        return "Odd";
    }
}
function solution(num){
    return num % 2 === 0
    ? "Even" //짝수일 경우
    : "Odd"  //홀수일 경우
}

//2.평균 구하기
function solution(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] // sum = sum + arr[i];
    }
    return sum / arr.length;
}
//*reduce : 1.합산할 데이터들을 모두 연산해서 결과값만 리턴 2.배열에서만 사용 할 수 있음
// arr = [2,3,4,5];
// arr.reduce( ( cu, el ) ) => {
//     // cu : current - 누적된 값
//     // el : element - 배열의 각각의 요소
//     return cu + el
// }
// sum; 14
 
function solution(arr){
 const sum = arr.reduce( (cu, el)  => {
     return cu + el;
    }, 0)
        return sum / arr.length
}
function solution(arr){
    return (arr.reduce( (cu, el)  => {
        return cu + el;
    }, 0)) / arr.length
}

//3.가운데 글자 가져오기
function solution(s){
    const center = Math.floor(s.length / 2); // 내림을 함으로써 소수점을 제거.
    let answer = s[center];

    if( s.length % 2 === 0 ){
        // 짝수일 경우에는
        // 앞에 있는 인덱스까지 붙여서 리턴
        answer = s[center - 1] + answer;
    }
    return answer;
}
function solution(s){
    const center = Math.floor(s.length / 2);
    const answer = s.length % 2 === 1
        ? s[center] // 홀수
        : s.slice( center - 1, center + 1) // 짝수
    return answer;
}
// *slice
// 1. 문자열과 배열에 사용 가능
// 2. 배열을 얕게 복사 가능
// ex) 
// 1)arr = [1,2,3]
//   a = arr.slice();
//   a[0] = 4; a는 고유한 배열을 갖고 있다.
// 2)arr = [1,2,3,4]
//   arr.slice(1); 결과값 : [2,3,4]
//   arr.slice(1,2); 결과값 : [2]
//   arr.slice(1,3); 결과값 : [2,3]
