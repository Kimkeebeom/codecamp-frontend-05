//2016 문제와 비슷하다!
const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5],
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5],
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  function solution(answers) {
    // 학생들의 점수를 저장하는 배열
    const score = [0, 0, 0];
  
    for (let i = 0; i < answers.length; i++) {
      for (let l = 0; l < answerTable.length; l++) {
        if (answers[i] === answerTable[l][i % answerTable[l].length]) {
          score[l]++;
        }
      }
    }
    // 가장 많이 맞춘 학생의 점수를 저장
    const biggest = Math.max(...score); // Math.max는 배열에서 적용 안됨. 그래서 스프레드 사용
  
    const answer = [];
    for (let i = 0; i < score.length; i++) {
      if (biggest === score[i]) {
        // 가장 많이 맞춘 학생의 점수와 동일할 때만
        answer.push(i + 1);
      }
    }
    return answer;
  }

  // 메서드 이용
const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5],
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5],
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  function solution(answers) {
    const answer = answerTable.map((el, i) => {
      const score = answers.reduce((acc, cur, l) => {
        return acc + (el[l % el.length] === cur ? 1 : 0);
      }, 0);
      return { student: i + 1, score }; // key와 value가 같으면 생략가능 (score : score)
    });
    // 가장 많이 맞춘 학생의 점수, 배열안의 객체라서 스프레드 사용 못함
    const biggest = Math.max(
      ...answer.map((el) => {
        return el.score;
      })
    );
    const answer2 = answer
      .filter((el) => {
        return el.score === biggest;
      })
      .map((el) => el.student);
    return answer2;
  }

  // 같은 내용
const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5],
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5],
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
 ]
 function solution(answers) {
  const answer = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur,l) => {
      return acc + ( el[l % el.length] === cur ? 1 : 0 )
    },0)
    return { student : i + 1, score }  // key와 value가 같으면 생략가능 (score : score)
  })
  // 가장 많이 맞춘 학생의 점수, 배열안의 객체라서 스프레드 사용 못함
  const biggest = Math.max( ...answer.map(el => { 
    return el.score
  }))
  return answer.filter( el => {
    return el.score === biggest
  }).map( el => el.student)
 }