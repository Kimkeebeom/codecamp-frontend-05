export default function TypescriptPage() {
  // // 타입추론
  // let aaa = "안녕하세요"
  // aaa = 3

  // // 문자타입
  // let bbb: string;
  // bbb = 123

  // // 숫자타입
  // let ccc : number = 5
  // ccc = "asddf"

  // // 불린타입
  // let ddd: boolean
  // ddd = 123
  // ddd = "asdf"

  // // 배열타입
  // let eee: number[] = [1,2,3,4,5,6, "안녕하세요"]
  // let fff: string[] = ["철수", "영희", "훈이", 13]
  // let ggg: (string | number)[] = [1,2,3,4,"철수","영희"]
  // let hhh: string[] | number[] = [1,2,3,4,"철수", "영희"]
  // hhh = [1,2,3]

  // // 객체타입
  // interface Iprofile {
  //     name: string
  //     age: number | string // 숫자 또는 문자 가능
  //     school: string
  // }

  // const profile: Iprofile = {
  //     name:"철수",
  //     age: 8,
  //     school: "다라쥐초등학교"
  // }
  // profile.school = 123
  // profile.age = "8살"

  return <div>타입스크립트 연습!!!</div>;
}
