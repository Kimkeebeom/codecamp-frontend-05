import InfiniteScroll from "react-infinite-scroller"
import { getMyDate } from "../../../../commons/libraries/utils"
// import { withAuth } from "../../../commons/hocs/withAuth"
import * as P from './ProductList.styles'

export default function ProductListUI (props){
    if(!props.data) return <div/>

    return(
        <P.Wrapper>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
            {/* {props.data?.fetchUseditems.map((el: { _id: any }) => (*/}
                <P.List>
                    {props.data?.fetchUseditems?.map((el)=> (
                        <P.Listitems key={el._id}>
                            <div 
                            id={el._id}
                            onClick={props.MoveToProductDetail(el)}
                            style={{ cursor: 'pointer' }}
                            >
                                <img src={`https://storage.googleapis.com/${el.images[0]}`}
                                    onError={(event) => event.currentTarget.src = '/images/product/noimg.jpg'} />
                            </div>
                            <P.ListInfor>
                                <P.Name>작성자: {el.name}</P.Name>
                                <P.Price>가격: {el.price}</P.Price>
                                <P.CreatedAt>{getMyDate(el.createdAt)}</P.CreatedAt>
                            </P.ListInfor>
                        </P.Listitems>
                    ))}            
                </P.List>
                {/* ))} */}
            </InfiniteScroll>
        </P.Wrapper>
    )
}

// export default withAuth(ProductListUI)