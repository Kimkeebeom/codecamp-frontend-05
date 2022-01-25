//1. 자연수 뒤집어 배열로 만들기
function solution(n){
    const answer = [];
    
    n = n.toString();
    
    for( let i = n.lenght - 1; 1 >= 0 ; i-- ){
      answer.push( Number(n[i]) );
    }
    return answer;
  }

  function solution(n){
    const answer = [];
    
    n = n.toString();
    
    for( let i = n.lenght - 1; 1 >= 0 ; i-- ){
      answer.push( Number([i]) );
    }
    return answer;
  }

  function solution(n){
    const answer = n.toString()
                    .split("")
                    .map( el => {
                      return Number(el)
                    })
                    .reverse()
    return answer;
    
  }

// 2. 나누어 떨어지는 숫자 배열
function solution(arr, divisor){
    const answer = [];
    
    for( let i = 0; i < arr.length; i++ ){
      if( arr[i] % divisor === 0 ){
        answer.push( arr[i]) 
      }
    }
    return answer.length === 0
      ? [-1] //빈 배열이라면
      : answer.sort( (a,b) => a - b )
    // 빈 배열이 아니라면 오름차순으로 정렬 후 리턴
  }

  function solution(arr, divisor){
    const answer = arr.filter( num => {
      return num % divisor === 0
    })
    
    return answer.length === 0
      ? [-1]
      : answer.sort((a,b)=> a- b)
    
  }