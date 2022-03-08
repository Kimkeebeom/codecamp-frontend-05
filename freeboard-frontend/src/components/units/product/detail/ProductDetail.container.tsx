import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { IMutation, IMutationDeleteUseditemArgs, IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types"
import ProductDetailUI from "./ProductDetail.presenter"
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, DELETE_USED_ITEM, FETCH_USED_ITEM } from "./ProductDetail.queries"

export default function ProductDetail(){
    const router = useRouter()

    const {data} = useQuery<
    Pick<IQuery, "fetchUseditem">, 
    IQueryFetchUseditemArgs
    >(FETCH_USED_ITEM,
    {
        variables: {useditemId: String(router.query.move)}
    })

    const [deleteUseditem] = useMutation<
    Pick<IMutation,"deleteUseditem">,
    IMutationDeleteUseditemArgs
    >(DELETE_USED_ITEM)

    const [createPointTransactionOfBuyingAndSelling] = useMutation/* <
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
    > */(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)

    const onClickDelete = async () => {
        try {
          await deleteUseditem({
            variables: { useditemId: String(router.query.move) },
          })
          alert('삭제 성공')
          router.push('/product/list')
        } catch (error) {
          console.log(error.message)
          alert('삭제 권한이 없습니다!')
        }
      }
    
    const onClickMoveToEdit = () => {
      router.push(`/product/${router.query.move}/edit`)
    }

    const [modalOpen, setModalOpen] = useState(false)
    const onClickCancel = () => {
        setModalOpen(false)
    }
    const onClickModalOpenUsePoint = () => {
        setModalOpen(true)
    }

  const onClickUsePoint = async () => {
    //   console.log("제발 떠라")
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
            lat={data?.fetchUseditem?.useditemAddress?.lat}
            lng={data?.fetchUseditem?.useditemAddress?.lng}
            address={data?.fetchUseditem?.useditemAddress?.address}
            data={data}
            modalOpen={modalOpen}
            onClickMoveToEdit={onClickMoveToEdit}
            onClickDelete={onClickDelete}
            onClickModalOpenUsePoint={onClickModalOpenUsePoint}
            onClickUsePoint={onClickUsePoint}
            onClickCancel={onClickCancel}
        />
    )
}