//1
let name = "영희"
console.log(name);

//2
let name = "철수"
console.log(name);

//3
let fruits=["사과","바나나","파인애플"]

fruits.push("사과");
fruits.push("바나나");
fruits.push("파인애플");

console.log(fruits);

//4
let fruits=["사과","바나나","파인애플"]
let newFruits=[]
newFruits.push(fruits[fruits.length - 1])

//5.학생들의 이름이 담긴 students 배열이 있습니다.
//  배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.
let students = ["철수", "영희", "훈이", "짱구", "유리"]

console.log(newArr) // ["철수", "영희", "훈이"]

//6.주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요. 
let fruits = ["사과", "바나나"]

console.log(fruits) // ["맛있는 사과", "맛있는 바나나"]

//7.상수 number는 핸드폰 번호가 담긴 문자열입니다. 
//  해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.
const number = "01012345678"

console.log(arr) // ["010", "1234", "5678"]

//8.주어진 student 객체에 'name'이라는 키를 만들고, "철수"를 할당하세요.
let student = { name : "철수" }
console.log(student) // { name : "철수" }

//9.student와 school 두 개의 객체가 있습니다.
//  student 객체에 school이라는 객체를 할당해야 합니다.
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
};

/*
student['school'] = school;
 */

console.log(student)  
	/*{
    name: '철수',
    age: 8,
    school: {
      name: '다람쥐초등학교',
      teacher: '다람이'
    }
  }*/

//10.주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.
//   그런데 철수와 관련이 없는 drink라는 키가 있네요.  
//   student에서 { drink: "사이다" }를 삭제해주세요.
let student = {
	name: "철수",
	drink: "사이다"
};

delete student.drink; 

console.log(student) // { name : "철수" }

//11.주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다.
//그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되어 있습니다.
//"영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요.
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

console.log(classmates) // 
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

//12.주어진 변수 str과 number의 데이터 타입을 확인하세요.
let str = "3"
let number = 3

console.log(typeof str) // string
console.log(typeof number) // number

//13.주어진 변수 array과 object의 데이터 타입을 확인하세요.
let array = []
let object = {}

console.log(typeof array) // object
console.log(typeof object) // object
console.log(Array.isArray(array)) // true
console.log(Array.isArray(object)) // false

//14.num에 데이터를 string으로 변경 후, str에 할당해주세요.
let num = 24
let str

console.log(typeof str) // string

//15.각각의 연산 결과가 무엇인지 알아보세요.
1 + "1"

1 - "1"

"1" + "1"

1 * "1"

3 * "A"

1 + 1 + '1'

'1' + 1 + 1

"11" - 1

"11" + 1

"홍" + "길동"

20 === "20"

20 == "20"

!true

//16.각각의 연산 결과가 무엇인지 알아보세요.
(20 >= 10) && (20 === 10)

(20 === 10) || (10 === 10)






