import { useEffect, useState } from "react"
import { IBoard } from "../../src/commons/types/generated/types"

export default function BasketLoggedInPage(){
    const [basketItems, setBasketItems] = useState([])

    useEffect(() => {
        const baskets = JSON.parse(localStorage.getItem("basket") ||  "[]") // basket에 불러올 목록이 없으면 "[]" 빈 배열로 보여줘!
        setBasketItems(baskets)
    }, [])
    
    return(
        <div>
            <h1>나만의 장바구니(비회원전용!!)</h1>
            {basketItems.map((el: IBoard) => (
                <div key={el._id}>
                    <span>{el.writer}</span>
                    <span>{el.title}</span>
                </div>
            ))}
        </div>
    )
}