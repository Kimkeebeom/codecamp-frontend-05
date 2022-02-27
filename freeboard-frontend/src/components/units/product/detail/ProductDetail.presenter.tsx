import { getMyDate } from '../../../../commons/libraries/utils'
import ProductCommentsList from '../../productComments/list/ProductCommentsList.container'
import ProductCommentsWrite from '../../productComments/write/ProductCommentsWrite.container'
import * as P from './ProductDetail.styles'

export default function ProductDetailUI(props){
    return(
        <>
        <P.Wrapper>
            <P.CreatedAt>{getMyDate(props.data?.fetchUseditem?.createdAt)}</P.CreatedAt>
            <P.ImagesWrapper>
                {props.data?.fetchUseditem?.images
                    ?.filter((el:string)=>el)
                     .map((el:string)=>(
                         <P.Images key={el}
                            src={`https://storage.googleapis.com/${el}`}/>
                     ))}
            </P.ImagesWrapper>
            <P.Name>
                {props.data?.fetchUseditem?.name}
            </P.Name>
            <P.Remarks>
                {props.data?.fetchUseditem?.remarks}                       
            </P.Remarks>
            <P.Price>
                {props.data?.fetchUseditem?.price}
            </P.Price>
            <P.Contents>
                {props.data?.fetchUseditem?.contents}
            </P.Contents>
            <P.Button>
                그냥 버튼
            </P.Button>
        </P.Wrapper>
        <ProductCommentsWrite/>
        <ProductCommentsList/>
        </>
    )
}