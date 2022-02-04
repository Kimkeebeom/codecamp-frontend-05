// 1. 내적
function solution(a, b) {
    let answer = 0;

    for(let i=0; i< a.length; i++){
        const sum = a[i] * b[i];
        answer += sum;
    }
    return answer;
}

function solution(a, b){
    const asnwer = a.reduce( (acc, cur, i) => {
        return acc + ( cur * b[i] )
    }, 0)
    return answer;
}

// 2.제일 작은 수 제거하기
function solution(arr){
    const answer = []

    //1. 제일 작은 수를 찾는 과정
    let min = 0
    for (let i =p; i < arr.length; i++){
        if( min > arr[i] ){
            min = arr[i]
        }
    }
    
    // 2. 제일 작은 수를 제외한 나머지 값들을 새로운 배열에 저장
    for (let i =p; i < arr.length; i++){
        if( arr[i] !== min) {
            answer.push( arr[i])
        }
    }
    // 빈 배열이라면 [-1] 데이터를 리턴
    // 빈 배열이 아니라면 작은 수가 빠진 배열을 리턴
    return answer.length === 0 ? [-1] : answer
}

function solution(arr){

    const min = Math.min(...arr)

    const answer = arr.filter( num => {
        return num !== min
    })
    return answer.length === 0 ? [-1] : answer;
}