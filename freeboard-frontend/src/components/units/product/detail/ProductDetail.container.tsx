import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs, IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types"
import ProductDetailUI from "./ProductDetail.presenter"
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, FETCH_USED_ITEM } from "./ProductDetail.queries"

export default function ProductDetail(){
    const router = useRouter()

    const {data} = useQuery<
    Pick<IQuery, "fetchUseditem">, 
    IQueryFetchUseditemArgs
    >(FETCH_USED_ITEM,
    {
        variables: {useditemId: String(router.query.move)}
    })
    // console.log("데이터:",data)

    const [createPointTransactionOfBuyingAndSelling] = useMutation/* <
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
    > */(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)

    const [modalOpen, setModalOpen] = useState(false)
    const onClickCancel = () => {
        setModalOpen(false)
  }
    const onClickModalOpenUsePoint = () => {
        setModalOpen(true)
    }

  const onClickUsePoint = async () => {
      console.log("제발 떠라")
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.move },
      })
      router.push(`/product/list`)
      // Modal.success( content: data?.createPointTransactionOfBuyingAndSelling.name )s
    } catch (error) {
      alert(error.message)
    }
  }

    return(
        <ProductDetailUI
            data={data}
            modalOpen={modalOpen}
            onClickModalOpenUsePoint={onClickModalOpenUsePoint}
            onClickUsePoint={onClickUsePoint}
            onClickCancel={onClickCancel}
        />
    )
}