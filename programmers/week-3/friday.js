// 1. 두 정수 사이의 합
function solution(a,b){
    let answer = 0;
    
    if( a === b ){
      return a; // 또는 b 아무 수나 리턴해줄 경우
    } else {
      // 반복문이 실행될 때, 설정되는 초기값 ( a와 b중에 작은 수가 들어옵니다.)
      // const start = a > b ? b : a
      
      const start = Math.min( a,b ) //min이라는 메서드 안에 인자들을 ,로 넣어준다.
      
      // 반복문이 종료되는 조건을 설정( a와 b중에 큰 값이 들어옵니다. )
      // const end = a > b ? a : b
      const end = Math.max( a, b );
      
      for (let i = start; i <= end; i++){
        answer += i;
      }
    }
    return answer;
  }


// 2. 정수 제곱근 판별
function solution(n) {
    // 제곱근
    // 제곱의 기준이 되는 수 (같은 수를 두번 곱할 때 나오는 제곱값)
    let answer = -1;
    
    for ( let i = 1; i * i <= n; i++){
      if( i * i === n ){
        // 제곱근을 찾은 경우
        answer = i + 1;
        return answer * answer;
      }    
    }
    
    return answer;
  }

  //////////////////////////////////////////////////////////////////////////

  function solution(n){
    let answer = 1;
    // 제곱된 값이 n 보다 작을 경우에만 반복문을 실행
    while( answer * answer < n ) {
      answer++;
    }
    
    return answer * answer === n ? (answer + 1) * (answer + 1) : -1;
  }

  ////////////////////////////////////////////////////////////////////////////

  function solution(n){
    let answer = Math.sqrt( n )
    if( Number.isInteger( answer ) === true ){
      // true라면 정수가 맞다.(제곱근이 맞다)
      answer++;
      return answer * answer; // answer ** 2 = answer의 2제곱 (data ** 제곱할 수) => Math.pow( 기준점이 되는 데이터, 몇제곱을할건지?)
    } else {
      // false라면 정수가 아니다.(제곱근이 아니다)
      return -1;
    }
  }



  