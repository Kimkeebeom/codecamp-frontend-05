import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { getMyDate } from "../../../../commons/libraries/utils";
import { IBoard, IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList(){
    const {basketItem, setBasketItem} = useContext(GlobalContext)
    const router = useRouter()
    const {userInfo} = useContext(GlobalContext) // 모든 페이지에 로그인한 사실을 알려주기 위해!

    const {data, fetchMore} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
    >(FETCH_USED_ITEMS, {variables: {page: 1}})

    const todayPick = getMyDate(new Date())

    // 오늘 본 상품 목록에 등록
    const MoveToProductDetail = (event)  => {
      // console.log("event: ",event)
        const baskets = JSON.parse(localStorage.getItem(todayPick) || "[]")
        const temp = baskets.filter((basketEl: IBoard) => basketEl._id === event.currentTarget.id)

        const {__typename, ...newPick} = event.currentTarget.id
        baskets.push(newPick)
        localStorage.setItem(todayPick, JSON.stringify(temp))
        setBasketItem(temp)
        
        router.push(`/product/${event.currentTarget.id}`)
        // console.log(el)
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