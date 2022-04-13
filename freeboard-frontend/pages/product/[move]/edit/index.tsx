import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_USED_ITEM } from '../../../../src/components/units/product/detail/ProductDetail.queries'
import ProductWrite from '../../../../src/components/units/product/write/ProductWrite.container'

export default function ProductEditPage () {
  const router = useRouter()

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.move) }
  })

  return (
        <ProductWrite isEdit={true} data={data}/>
  )
}
