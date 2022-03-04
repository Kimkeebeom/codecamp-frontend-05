import styled from "@emotion/styled"
import router from "next/router"
import { MouseEvent, useContext, useEffect } from "react"
import { GlobalContext } from "../../../../../pages/_app"
import { getMyDate, getPrice } from "../../../../commons/libraries/utils"

const Wrapper = styled.div`
  z-index: 2;
  width: 150px;
  padding: 20px 15px;
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  overflow: hidden;
  background: white;
  border-radius: 20px;
  p {
    font-weight: 700;
  }
  > div:last-child {
    margin-bottom: 5px;
  }
`
const ImgContainer = styled.div`
  width: 45px;
  height: 45px;
  overflow: 'hidden';
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  margin: 15px 0;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export default function LayoutSidebarBasketPick(){
    const {basketItem, setBasketItem} = useContext(GlobalContext)
    const todayPick = getMyDate(new Date())

    useEffect(() => {
        const baskets = JSON.parse(localStorage.getItem(todayPick) || "[]")
        if(baskets){
            setBasketItem(baskets)
        }
    }, [])

    const onClickDetail = (el) => () => {
        router.push(`/product/${el._id}`)
    }

    return(
        <>
            {basketItem ? (
                <Wrapper>
                    <>
                        <p>오늘 본 상품</p>
                        {basketItem
                        .map((el) => (
                            <Items
                            key={el._id}
                            onClick={onClickDetail(el)}
                            style={{ cursor: 'pointer' }}
                            >
                            <ImgContainer>
                                <img
                                src={`https://storage.googleapis.com/${el.images[0]}`}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/product/noimg.jpg'
                                }}
                                />
                            </ImgContainer>
                            <div>
                                <div>{el.name}</div>
                                <div>{getPrice(el.price)}</div>
                            </div>
                            </Items>
                        ))
                        .filter((el, index) => {
                            if (index < 5) return el
                        })}
                    </>
                </Wrapper>
            ) : (
                <></>
            )}        
        </>
    )
}