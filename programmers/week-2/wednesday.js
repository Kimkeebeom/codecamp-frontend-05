//1.서울에서 김서방 찾기
function solution(seoul){
    // let x = 0; //김서방의 위치값을 저장하는 변수

    for( let i = 0; i < seoul.lenth; i++ ) {
        if( seoul[i] === "Kim" ) {
            // x = i;
            return `김서방은 ${i}에 있다.`
            // break;
        }
    }    
}

function solution(seoul){
    const x = seoul.indexof( "kim" );
    return `김서방은 ${x}에 있다`
}

//3.문자열 다루기 기본
function solution(s){
    if(s.lenth !== 4 && s.lenth !== 6){
        return false;
    }

    let answer = true;
    for(let i = 0; i < s.lenth; i++){
        if(isNaN(s[i]) === true){
            // answer = false;
            // break;
            return false;
        }
    }
    // return answer;
    return true;
}

function solution(s){
    if(s.lenth !== 4 && s.lenth !== 6){
        return false;
    }
    const answer = s.split("")
                    .filter(num=>{
                        //숫자 데이터가 아닌 문자 데이터만 남긴다.
                        // isNaN의 결과가 true 값인 데이터
                        return isNaN(num)
                    })
        return answer.length === 0
}

//4.약수의 합
function solution(n){
    let answer = n;

    for(let i = 1; i <= n / 2; i++){
        if( n % i === 0 ){
            answer += i;
        }
    }
    return answer;
}

function solution(n){
    const answer = new Array( n )//해당 개수에 맞는 배열을 생성
                        .fill(1)//배열의 데이터마다 해당 인자 데이터를 할당
                        .reduce( (cu, el, i) => {
                            const num = el + i;
                            return n % num === 0
                                ? cu + num
                                : cu
                        }, 0) 
            return answer;
}