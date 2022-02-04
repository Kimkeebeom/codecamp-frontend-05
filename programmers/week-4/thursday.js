// 1. 음양 더하기
function solution(absolutes, signs) {
    for( let i = 0; i < absolutes.length; i++ ){
      answer += signs[i]
            ? absolutes[i] // true
            : -absolutes[i] // false
  //     console.log(i, absolutes[i], signs[i])
  //     if( signs[i] === true ){
  //       // 참이라면 양수
  //       answer += absolutes[i]
        
  //     } else {
  //        // 참이 아니라면 음수
  //       answer -= absolutes[i]
  //     }
  //   }
    return(answer)
  }
}

  function solution(absolutes, signs) {
    const answer = absolutes.reduce( (acc, cur) => {
      console.log(acc,cur, signs[i])
      // true일 때는 더해주고
      // false일 때는 빼준다.
      return signs[i] ? acc + cur : acc - cur 
    }, 0)
    return answer;
  }

  // 2.하샤드 수
  function solution(x) {
    x = String(x)
    // console.log(typeof x)
    // console.log(x[0])
    let answer = 0;
    for(let i = 0; i < x.length; i++) {
      // console.log(i, x[i])
      answer += Number(x[i]) // 숫자 타입으로 만들어줘야 숫자값으로 계산이 된다!      
    }
    return x % answer === 0
  }

  function solution(x) {
    // const answer = String(x) 
    const answer = x.toString()
                    .split("") // 각각의 요소로 쪼개준다.
                    .reduce( (acc, cur) => {
                        console.log(typeof acc, typeof cur)
                        return Number(acc) + Number(cur);
                    })
    // console.log(answer, typeof answer)
    return x % answer === 0
}

function solution(x) {
    // const answer = String(x) 
    const answer = x.toString()
                    .split("") // 각각의 요소로 쪼개준다.
                    .reduce( (acc, cur) => {
                        console.log(typeof acc, typeof cur)
                        return acc + Number(cur);
                    }, 0) // 최초식에 넘버타입인 0을 넣어주면 누적값은 넘버타입으로 받아오게 된다. 그러면 cur에만 Number타입을 지정해주면 된다.
    // console.log(answer, typeof answer)
    return x % answer === 0
}