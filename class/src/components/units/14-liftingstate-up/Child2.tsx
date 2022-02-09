export default function Child2(props){

    const onClickCountUpTwo = () => {
        props.setCountTwo((prev) => prev + 1)
    }

    return(
        <div>
            <div>자식1 카운트:{props.countTwo}</div>
            <button onClick={onClickCountUpTwo}>카운트 올리기!!</button>
        </div>
    )
}