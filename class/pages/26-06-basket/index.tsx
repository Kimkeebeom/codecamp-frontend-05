import { gql, useQuery } from "@apollo/client"
import { IBoard } from "../../src/commons/types/generated/types"
import {getMyDate} from '../../../freeboard-frontend/src/commons/libraries/utils'

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards{
            _id
            writer
            title
        }
    }
`

export default function BasketPage(){
    const { data } = useQuery(FETCH_BOARDS)

    const onClickBasket = (el: IBoard) => () => {
        console.log(el)

        const todayDate = getMyDate(new Date())

        // 장바구니를 담는데 마지막에 클릭한 정보만 담겨서 클릭한 정보들을 계속해서 쌓고 싶을 때 =>
        // 기존에 있는걸 가지고 와서 새롭게 들어온 el을 추가하고(push) 최종 결과물을 setItem해보자~
        // 3단계: (정보를 가져온다 - push한다 - setItem에 저장한다)
        const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]") // JSON.parse 문자열을 객체로 돌려놓기! 
                                                                           // 장바구니안에 정보가 있으면 정보를 보여주고 정보가 없으면 빈 배열을 보여줘!

        // el의 값(onClickBasket)이 장바구니에 담긴 baskets 값과 중복 될 경우 return해주기
        const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id) // basketEl 함수의 parameter이기 때문에 이름을 마음대로 바꿔줄 수 있다!
                                                                                   // temp : 보통 임시로 id 값을 담을 때 사용하는 변수명을 temp로 쓴다.
        if(temp.length === 1) { // temp에 이미 id 저장되어 담겨있을 때 & 반대로 temp.length === 0 : temp에 id가 없음을 의미
            alert("이미 담으신 물품입니다.")
            return 
        }
        const {__typename, ...newEl } = el // typename이 굳이 필요하지 않아서 지우고 나머지 값을 보여줘! => typename이 삭제된 newEl
                                            // delete.el__typename으로도 작성이 가능하지만 별로 좋지 못한 방법
        baskets.push(newEl)
        localStorage.setItem(todayDate, JSON.stringify(baskets))
    }

    return(
        <div>
            {data?.fetchBoards.map((el: IBoard) => (
                <div key={el._id}>
                    <span>{el.writer}</span>
                    <span>{el.title}</span>
                    <button onClick={onClickBasket(el)}>장바구니 담기</button>
                </div>
            ))}
        </div>
    )
}