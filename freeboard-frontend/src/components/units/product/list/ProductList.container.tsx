import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { getMyDate } from "../../../../commons/libraries/utils";
import { IBoard, IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList(){
    const {basketItem, setBasketItem, userInfo} = useContext(GlobalContext) // 모든 페이지에 로그인한 사실을 알려주기 위해!
    const router = useRouter()

    const {data, fetchMore} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
    >(FETCH_USED_ITEMS, {variables: {page: 1}})

    const todayPick = getMyDate(new Date())

    // 오늘 본 상품 목록에 등록
    const MoveToProductDetail = (el) => ()  => {
      console.log("event:", el)
      // console.log("event: ",event)
        const baskets = JSON.parse(localStorage.getItem(todayPick) || "[]")
        const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id)

        if(temp.length === 1){
          alert("이미 담으신 물품입니다.")
          return
        }

        const {__typename, ...newPick} = el
        baskets.push(newPick)
        // console.log(el)
        localStorage.setItem(todayPick, JSON.stringify(baskets))
        setBasketItem(baskets)
        
        router.push(`/product/${el._id}`)

    }

    function onLoadMore() {
        if (!data) return;
    
        fetchMore({
          variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult?.fetchUseditems)
              return { fetchUseditems: [...prev.fetchUseditems] };
            return {
                fetchUseditems: [
                ...prev.fetchUseditems,
                ...fetchMoreResult.fetchUseditems,
              ],
            };
          },
        });
      }

    return (
        <ProductListUI
            userInfo={userInfo}
            data={data}
            onLoadMore={onLoadMore}
            MoveToProductDetail={MoveToProductDetail}
        />
    )
}