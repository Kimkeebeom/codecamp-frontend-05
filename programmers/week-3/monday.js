function solution(s){
    const answer = s.split(" ") // 공백을 기준으로 앞뒤의 데이터를 나눠준다.
                    .map( word => {
                      return word.split("")
                                 .map( (letter, i) => {
                         return i % 2 === 0
                              ? letter.toUpperCase()
                              : letter.toLowerCase()
                      }).join("")
                    }).join(" ")
    return answer;
  }