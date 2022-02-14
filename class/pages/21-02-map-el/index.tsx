export default function mapElPage(){

    // // 1. 기본방법
    // ["철수","영희","훈이"].forEach((el, index) =>{
    //     console.log(el);
    //     console.log(index);
    // });

    // // 2. 매개변수 변경한 방법
    // ["철수","영희","훈이"].forEach((asdf, werd) =>{
    //     console.log('el:', asdf);
    //     console.log('index:', werd);
    // });

    // // 3. 함수선언식 방법
    // ["철수","영희","훈이"].forEach(function(asdf, werd){
    //     console.log('el:', asdf);
    //     console.log('index:', werd);
    // });

    // 4. el과 index를 바꿔보기
    ["철수","영희","훈이"].forEach(function(index, el){
        console.log('el:', el);
        console.log('index:', index);
    });

    return <></>
}