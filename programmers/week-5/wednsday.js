// 1.최대공약수와 최소공배수

function solution(n, m) {
    // 최대공약수 : 두 수의 약수중에서 (공통되는) 제일 큰 수
    // 최소공배수 : 두 수의 배수중에서 (공통되는) 제일 작은 수
    
    // 최대공약수 구하기
    let max = 0; // 제일 큰 값
    for( let i = 1; i <= m; i++ ) {
        if( n % i === 0 && m % i === 0 ){
            // console.log(n % i, m % i, i)
            max = i;
        }        
    }
    // console.log(max)
    // 최소공배수 구하기
    let min = 0;
    for( let i = m; i <= n * m; i += m ){
        // console.log(i)
        if( i % n === 0 ) {
            // console.log(i)
            min = i;
            break;
        }
    }
    // console.log(max, min)
    return [ max, min ]
}

function solution(n, m) {
    let a = m; // 큰 수가 들어온다
    let b = n; // 작은 수가 들어온다
    let r = 0; // a를 b로 나눴을 때의 나머지 값
     
     while( (a % b) > 0 ){
         r = a % b
         a = b; // 큰 수에 작은 수를 할당
         b = r; // 작은 수에는 나머지 값 할당
     }
     // console.log(a, b)
     
     // 최소공배수 : n과 m을 곱한 값에 최대공약수를 나누면 최소공배수가 된다.
     return [ b, (n * m) / b ]
 }