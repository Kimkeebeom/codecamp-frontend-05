// 1.콜라츠 추측
function solution(num){
    let answer = 0;
    //조건식이 true일 때만 안쪽의 로직이 실행
    while( num !== 1 ){
      if( answer >= 500 ){
        return -1;
      }
      if( num % 2 === 0 ){
        // 짝수인 경우
        num = num / 2;
      } else {
        // 홀수인 경우
        num = (num * 3) + 1;
      }
      answer++;
    }
    return answer;
  }

  function solution(num){
    let answer = 0;
     
     // 500번 안에 1이 나오면 함수를 종료
     for( let i = 0; i < 500; i++ ){
       if( num === 1 ){
         return answer;
       }
       if( num % 2 === 0 ){
         num = num / 2 // 짝수
       } else {
         num = ( num * 3 ) + 1; // 홀수
       }
     }
     // 500번 안에 1이 나오지 않아서 실행되는 로직
     return -1;
   }

   let answer = 0;
  
  new Array( 500 )
      .fill( 1 )
      .forEach( _ => { // 인자는 보내줄건데 사용하지 않을 때 언더바를 쓸 수 있다.
          if( num !== 1 ){
            answer++;
            num = num % 2 === 0
                ? num / 2 //짝수
                : (num * 3) + 1 // 홀수
          }
  })
  return num !== 1 ? -1 : answer;

  function solution(num){
    let answer = 0; 
    const result = new Array(500)
                    .fill( 1 )
                    .reduce( (cu,el)  => {
                      if ( cu !== 1){
                        answer++;
                        return cu % 2 === 0
                            ? cu / 2 // 짝수
                            : (cu * 3) + 1 // 홀수
                        } else {
                          return 1;
                        }
                    }, num);
    return result !== ? -1 : answer;
  }