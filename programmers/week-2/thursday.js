//1.자릿수 더하기
function solution(n){
    let answer = 0;
    console.log(typeof n)
    n = String(n);
    console.log(typeof n)

    for( let i = 0; i < n.length; i++){
        answer += Number(n[i]);
    }
    return answer;
}

function solution(n){
    const answer = String(n) //n.toString
                    .split("")
                    .reduce((cu,el)=>{
                        return cu + Number(el)
                    }, 0)
    return answer;
}

//2.x만큼 간격이 있는 n개의 숫자
function solution(x,n){
    const answer = [];

    for( let i = 1; i <= n; i++ ){
        answer.push( i * x );
    }
    return answer;
}

function solution(x, n){
    const answer = new Array(n)
                    .fill(1)
                    .map( (num, i) => {
                        return x * (num + i)
                    })
    return answer;
}