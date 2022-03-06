import { Modal } from 'antd'
import { getMyDate, getPrice } from '../../../../commons/libraries/utils'
import ProductCommentsList from '../../productComments/list/ProductCommentsList.container'
import ProductCommentsWrite from '../../productComments/write/ProductCommentsWrite.container'
import * as P from './ProductDetail.styles'

export default function ProductDetailUI(props){
    return(
        <>
            {props.modalOpen && (
                <Modal
                    visible={true}
                    title="선택하신 상품을 구매하시겠습니까?"
                    onOk={props.onClickUsePoint}
                    onCancel={props.onClickCancel}
                >
                    <div>판매자: {props.data?.fetchUseditem?.name}</div>
                </Modal>
            )}
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
                    {getPrice(props.data?.fetchUseditem?.price)}원
                </P.Price>
                <P.Contents>
                    {props.data?.fetchUseditem?.contents}
                </P.Contents>
                <P.Button onClick={props.onClickModalOpenUsePoint}>
                    구매하기
                </P.Button>
            </P.Wrapper>
            <ProductCommentsWrite/>
            <ProductCommentsList/>
        </>
    )
}