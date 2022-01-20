//1번 문제. 문자열을 정수로 바꾸기
//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
function solutions(s){
    s = Number(s);
    return s;
    //return s / 1
  }

  //2번 문제. 같은 숫자는 싫어
  function solutions(arr){
    const answer = [];
   
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] answer[answer.length - ]){
        answer.push(arr[i])
      }
    }
    return answer;   
  }

  //3.핸드폰 번호 가리기
  function solution(phone_number){
    let answer = "";
    
    for(let i = 0; i < phone_number.length; i++){
      console.log(i, phone_number[i])
      if(i< phone_number.length -4){
        // 뒷 4자리를 제외한 앞의 번호들은 *로 표시
        answer += "*";
        // answer = answer + "*";
        
      } else {
        // 뒷 4자리를 그대로 넣어준다.
        answer += phone_number[i]
      }
    }
    return answer;
  }
//3번 문제의 또 다른 풀이 방법
  function solution(phone_number){
    let answer = "";
    answer = answer.padStart( phone_number.length - 4, "*")
    answer += phone_number.slice(phone_number.length - 4, phone_number.length)
    return answer;
  }