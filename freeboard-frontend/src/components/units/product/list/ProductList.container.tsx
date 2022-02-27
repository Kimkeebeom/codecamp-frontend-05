import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList(){
    const router = useRouter()
    const {userInfo} = useContext(GlobalContext) // 모든 페이지에 로그인한 사실을 알려주기 위해!

    const {data, fetchMore} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
    >(FETCH_USED_ITEMS, {variables: {page: 1}})

    const MoveToProductDetail = (event) => {
        router.push(`/product/${event.currentTarget.id}`)
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