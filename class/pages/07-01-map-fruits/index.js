const FRUITS = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];
//하드코딩한 값은 state 값에 적용 안되기 때문에 밖에 따로 빼서 작성한 것

export default function MapFruitsPage(){
    // const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]

    // const bbb = ["나의레드향", "나의샤인머스켓", "나의산청딸기"].map( (el) => (<div>{el}</div>) )

    // const ccc = FRUITS.map( (el) => (<div>{el.number} {el.title}</div>) )  //<div></div>안에 {el} 객체들을 자바스크립트로 사용하고 싶으면 {}를 추가해준다.

    return(
        <div>
            {FRUITS.map( (el) => (
                <div>{el.number} {el.title}</div>) 
            )}
        </div>
    )

}