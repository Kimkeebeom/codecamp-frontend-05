import InfiniteScroll from "react-infinite-scroller"
import { withAuth } from "../../../commons/hocs/withAuth"
import * as P from './ProductList.styles'

const ProductListUI = (props) => {
    if(!props.data) return <div/>

    return(
        <>
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditems.map((el: { _id: any }) => (
        <P.Wrapper>
            {props.data?.fetchUseditems?.map((el)=> (
                <P.List
                    key={el._id}
                    id={el._id}
                    onClick={props.MoveToProductDetail}
                    style={{ cursor: 'pointer' }}
                >
                    <div>
                        <img src={`https://storage.googleapis.com/${el.images[0]}`}
                            onError={(event) => event.currentTarget.src = '/images/product/pooh.jpg'} />
                    </div>
                    <P.ListInfor>
                        <P.Name>{el.name}</P.Name>
                        <P.Price>{el.price}</P.Price>
                </P.ListInfor>
                </P.List>
            ))}            
        </P.Wrapper>
        ))}
        </InfiniteScroll>
        </>
    )
}

export default withAuth(ProductListUI)