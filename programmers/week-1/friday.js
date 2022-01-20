//41. 조건문 실전 적용 - 점수에 따른 등급 
function grade(score){
    if(score > 100 || score < 0){
      return "잘못된 점수입니다!";
    }
    
    let answer = ""
    if(score <= 100 && score >= 90){
      answer = "A";
    } else if(score <= 89 && score >= 80){
      answer = "B"
    } else if(score <= 79 && score >= 70){
      answer = "C"
    } else if(score <= 69 && score >= 60){
      answer = "D"
    } else {
      answer = "F"
    }
    return answer;
  }
  
  grade(99) 
  grade(88)
  grade(77)
  grade(66)
  grade(55)
  grade(102) 

//최적화한 코드
function grade(score){
    if(score > 100 || score < 0){
      return "잘못된 점수입니다!";
    }
    
    let answer = ""
    if(score >= 90){
      answer = "A";
    } else if(score >= 80){
      answer = "B"
    } else if(score >= 70){
      answer = "C"
    } else if(score >= 60){
      answer = "D"
    } else {
      answer = "F"
    }
    return answer;
  }
  grade(99) 
  grade(88)
  grade(77)
  grade(66)
  grade(55)
  grade(102) 
// 결과값  
// 'A'
// 'B'
// 'C'
// 'D'
// 'F'
// '잘못된 점수입니다!'

//043. 마이페이지
const myShopping = [
    { category: "과일", price: 12000},
    { category: "의류", price:10000},
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000},
    { category: "과일", price: 5000},
    { category: "의류", price: 10000},
    { category: "과일", price: 8000},
    { category: "의류", price: 7000},
    { category: "장난감", price: 5000},
    { category: "의류", price: 10000},
]

function myPage(category){
let count = 0; // 구매한 총 횟수를 저장하는 변수
let amount = 0; // 구매한 총 가격
let grade = "" // 등급을 저장

for(let i = 0; i<myShopping.length; i++){
if(myShopping[i].category === category){
 count ++;
 //amount = amount + i;
 amount += myShopping[i].price 
}
}

if( count >= 0 && count <= 2){
grade = "Bronze"
} else if( count >= 3 && count <= 4){
grade = "Silver"
} else if( count >= 5){
grade = "Gold"
}
return`${category}를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`
//return "의류를 구매한 횟수는 총 " + count + "회 금액은 " + amount + "원이며 등급은 " + grade + "입니다."
}

myPage()