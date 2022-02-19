// splice
// 1. 배열에서 사용 가능한 메서드
// 2. 배열의 특정 인덱스 값으로부터 데이터를 삭제할 수 있다.
// 3. 배열의 특정 인덱스 값으로부터 데이터를 추가할 수 있다.
// 4. 원본이 저장이 된다.

function solution(participant, completion) {
  
    for( let i = 0; i < completion.length; i++ ) {
      // console.log(completion[i])
      if(participant.includes(completion[i])) {
            participant.splice(
              participant.indexOf( completion[i]),
              1
          )
      }
    }
    return participant[0];
  }

  function solution(participant, completion){
  // 문자열을 오름차순
  participant.sort( (a,b) => a > b ? 1 : -1 );
  completion.sort();
  
  // console.log(participant, completion)
  for( let i = 0; i < participant.lenght; i++ ) {
    // console.log(participant[i], completion[i])
    if( participant[i] !== completion[i] ) {
      answer = participant[i];
      break;
      // console.log(participant[i], completion[i])
    }
  }
  return answer;
}

function solution(participant, completion){
    // 문자열을 오름차순
    participant.sort( (a,b) => a > b ? 1 : -1 );
    completion.sort();
    
    const answer = particiapnt.filter( (name, i) => {
      console.log(name, completion[i])
    });
    // console.log(answer)
    return answer[0];
  }