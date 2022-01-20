// 복습내용
// const obj = {
//   name:"철수",
//   age:12,
//   school:"호그와트"
// }

// for -in 문
// const str = "가나다라마바사아자차카타파하"

// for(let key in str){
//   console.log(key, str[key])
// }

//forEach문
// const arr = ["a","b","c","d"];

// arr.forEach( (data, index ) => {
//   console.log(data, index )
// })

//while문
// let current = 1; //로봇의 현재 위치
// let answer = 0; //이동 횟수

// while( current !== 100 ) {
//   current++;
//   answer++;
// }

// answer;

//23.입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
//   num은 1이상의 자연수가 들어옵니다.
//   만약 num이 5라면 1+2+3+4+5를 모두 더한 값을 출력시켜주세요.

function sum(num){
    let answer = 0;
    
    for(let i = 1; i <= num; i++) {
      answer += i; // answer = answer + i  
    }
    return answer;
  }
  
  sum(9999999999)

//result => 49999999990067860000

// 24.문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
//    반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.
function countLetter(str){
    //str = str.toLowerCase(); //모든 문자열을 소문자로 변환
    //str = str.toUpperCase(); //모든 문자열을 대문자로 변환
    
    let answer = 0;
    for(let i=0; i<str.length; i++){
      if(str[i] === "a" || str[i] === "A") {
        answer++;
      }    
    }
    return answer;
  }
  
  countLetter("Adday without laughter is a day wasted");

  //25.
  function makeNumber(num) {
    let answer = "";
    for(let i = 1; i <= num; i++) {
      answer += i;
      if(i !== num){
        answer += "-"
      }
    }
    return answer;
  }
  
  makeNumber(5)

// 26.
  function makeOdd( num ) {
    let answer = "";
    for ( let i = 1; i <= num; i++ ) {
      if( i % 2 === 1 ) {
        answer += i;
      }
    }
    return answer;
  }
  
  makeOdd(5)

//27.가장 큰수 찾기
  function bigNum( str ) {
      let biggest = 0;

      for( let i=0; i < str.length; i++ ) {
        if( Number(str[i]) > biggest ) {
          biggest = Number(str[i])
        }
      }
      return biggest
  }

  bigNum("12345")
