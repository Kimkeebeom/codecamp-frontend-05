export default function Hofpage(){

    const onClickBtn = (id: any) => () => {
        console.log(id)
    }

    return <button onClick={onClickBtn(123)}>함수 실행</button>
}