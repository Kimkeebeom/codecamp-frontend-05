// 1.피보나치 수

// 0,1, 1(0+1), 2(1+1), 3(1+2), 5(2+3), 8(3+5),...
function solution(n) {
    let prev = 0; // F(n-2) => 0번째의 피보나치 수가 초기값으로 들어감
    let next = 1; // F(n-1) => 1번째의 피보나치 수가 초기값으로 들어감
    let sum = 1; // F(n-2) + F(n-1) => 2번째의 피보나치 수가 초기값으로 들어감
    
    const answer = [];
    for( let i = 2; i <= n; i++ ){
        // console.log(i) 
        sum = (prev + next) % 1234567; // 이전의 값고 그 이전의 값을 서로 더해준 값
        prev = next; // n-2의 값에 n-1의 값을 할당
        next = sum; // n-1의 값에는 이전의 피보나치 수를 할당
        
        answer.push(sum);
    }
    // console.log(answer)
    return answer[n - 2] 
}

function solution(n) {
    let prev = 0; // F(n-2) => 0번째의 피보나치 수가 초기값으로 들어감
    let next = 1; // F(n-1) => 1번째의 피보나치 수가 초기값으로 들어감
    let sum = 1; // F(n-2) + F(n-1) => 2번째의 피보나치 수가 초기값으로 들어감
    
    const answer = new Array(n - 1)
                    .fill(1)
                    .reduce(acc => {
                        sum = (prev + acc) % 1234567;
                        prev = acc;
                        next = sum;
                        
                        return sum;
                    }, sum)
    return answer;
}