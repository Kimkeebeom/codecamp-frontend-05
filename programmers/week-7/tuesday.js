// 1. 다트게임
const bonus = [ "S", "D", "T" ] // 보너스를 잡아내기 위해서 배열에 저장
const option = ["*", "#"]; // 옵션을 잡아내기 위해서 배열에 저장

function solution(dartResult) {
    const answer = [];
    
    let score = ""; // 점수를 저장하기 위해 사용하는 변수
    for( let i = 0; i < dartResult.length; i++ ) {
        if( isNaN( dartResult[i] ) === false ) {
            // 숫자 타입으로 변환한 데이터가 NaN 값이 아닌 경우 (= 숫자가 맞는 경우)
            score += dartResult[i];
        
        } else {
            // 숫자 타입으로 변환한 데이터가 NaN 값인 경우 (= 숫자가 아닌 경우)
            if( bonus.includes( dartResult[i] ) ) {
                score = Number(score); // 점수를 숫자 타입으로 변경
                if( dartResult[i] === "D" ) {
                    // 2제곱
                    score = Math.pow( score, 2 ); // = score ** 2;
                } else if( dartResult[i] === "T" ) {
                    // 3제곱
                    score = Math.pow( score, 3 ); // = score ** 3;
                }
            }
            if( score !== "" ) {
                answer.push( score );
            }
            score = "";
            
            if( option.includes( dartResult[i] ) ) {
                // 옵션이 있는 경우
                if( dartResult[i] === "#" ) {
                    // 아차상인 경우, 해당 점수 -1 을 곱해준다.
                    answer[ answer.length - 1 ] *= -1;
                    
                } else {
                    // 스타상인 경우, 해당 점수에 2를 곱해준다.
                    answer[ answer.length - 1 ] *= 2;
                    
                    if( answer.length > 1 ) {
                        // 앞에 점수가 있으므로, 앞의 점수도 2를 곱해준다.
                        answer[ answer.length - 2 ] *= 2;
                    }
                }
            }
        }
    }
    let sum = 0;
    for( let i = 0; i < answer.length; i++ ) {
        sum += answer[i];
    }
    return sum;
}

// 메서드 이용
const bonus = [ "S", "D", "T" ] // 보너스를 잡아내기 위해서 배열에 저장

function solution(dartResult) {
    let score = ""; // 문자열에 있는 점수 데이터만 저장
    let currentValue = 0; // 현재 턴의 점수를 저장
    let last = false; // 점수를 합산할 시점을 찾음
    
    const answer = dartResult.split("")
                             .reduce( (acc, cur, i) => {         
        if( isNaN( cur ) === false ) {
            // 점수
            score += cur;
            last = false; // 새 턴이 시작됐음을 알려준다.
            
        } else if( bonus.includes( cur ) ) {
            // 보너스
            score = Number( score );
            const squared = bonus.indexOf( cur ) + 1; // S : 1, D : 2, T : 3
            
            currentValue = score ** squared;
            score = ""
            
            if( isNaN( dartResult[ i + 1 ] ) === false ||
                (i + 1) === dartResult.length
             ) {
                last = true; // 현재 턴이 종료가 됐다.
            }
            
        } else {
            // 옵션
            last = true;
            if( cur === "*" ) {
                // 스타상
                currentValue *= 2;
                
                if( acc.length > 0 ) {
                    acc[ acc.length - 1 ] *= 2;
                }
            } else {
                // 아차상
                currentValue *= -1;
            }
        }
        
        if( last ) {
            acc.push( currentValue )
        }
        return acc;
    }, []).reduce( (acc, cur) => {
        return acc + cur                             
    }, 0);
    return answer;
}