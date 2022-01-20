//18.조건문 연습
//input1, input2에는 boolean 타입인 true, false가 입력됩니다.
//둘 중에 하나라도 true라면 "true"
//두 개 모두 false면 "false"라는 문구를 띄워주세요.

function boolean(input1, input2) {
	if(input1 === true || input2 === true) {// => if(input1 || input2) 이렇게 사용도 가능
		// 한쪽이라도 true라면 실행
		return "true"
	} else if(input1 === false && input2 === false){
		// 두개 모두 true일 때 실행
		return "false"
	}
}

boolean(true, false) // true
boolean(false, true) // true
boolean(false, false) // false

//19. 홀짝
//입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다. 
//입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.


function evenOdd(num) {
	if(num === 0) {
		return "Zero"
    } else if(num%2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
}

evenOdd(12) // "Even"
evenOdd(15) // "Odd"
evenOdd(0)  // "Zero"

//20.온도
// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄워주세요
// 18이하면 "조금 춥네요"
// 19~23이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"

function temperature(num){
	if(num>=24) {
		return "조금 덥습니다"
	} else if(23>=num && num>=19) {
		return "날씨가 좋네요"
	} else {
		return "조금 춥네요"
	}
}

temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"

//21.며칠
//입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
//각 조건에 해당하는 알맞은 값을 입력해주세요.

function days(month) {
	if(month === 1 || 
	   month === 3 ||
	   month === 5 || 
	   month === 7 || 
	   month === 8 || 
	   month === 10|| 
	   month === 12) {
		return 31;
  } else if(month === 2){
	  return 28;
  } else {
	  return 30;
  }
}

const monthList = {
	1 : 31,
	2 : 28,
	3 : 31,
	4 : 30,
	5 : 31,
	6 : 30,
	7 : 31,
	8 : 31,
	9 : 30,
	10: 31,
	11: 30,
	12: 31
}

function days(month){
	return monthList[month]
}

// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일

days(1) // 31
days(2) // 28
days(4) // 30

//22.미니 계산기
// 숫자 2개와 연산자를 입력받아 알맞게 계산하는 미니계산기 함수를 만들어주세요.
// num1과 num2는 숫자열, operator는 문자열로 입력됩니다. 
// operator "+", "/", "-", "*" 이외의 다른 값이 들어온다면
// "올바른 입력이 아닙니다"라는 문구를 띄워주세요.

function calculator(num1, num2, operator){
	if (operator === "?") {
		console.log("")

	} else if(operator ==="?") {
		console.log("")

	}
}

calculator(10,5, '+')  // 15
calculator(10,5, '-')  // 5
calculator(10,5, '*')  // 50
calculator(10,5, '/')  // 2
calculator(10,5, 'a')  // "올바른 입력이 아닙니다"

