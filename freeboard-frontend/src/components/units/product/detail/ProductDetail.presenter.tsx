import { Modal } from 'antd'
import { useEffect } from 'react'
import { getMyDate, getPrice } from '../../../../commons/libraries/utils'
import ProductCommentsList from '../../productComments/list/ProductCommentsList.container'
import ProductCommentsWrite from '../../productComments/write/ProductCommentsWrite.container'
import * as P from './ProductDetail.styles'

declare const window: typeof globalThis & {
    kakao: any
  }

export default function ProductDetailUI(props){
    useEffect(() => {
        const script = document.createElement('script') // <script></script> 만들어짐
        script.src =
          '//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f&libraries=services&autoload=false' // ?&autoload=false 추가
        document.head.appendChild(script)
        
        script.onload = () => {
          window.kakao.maps.load(function () {
            const mapContainer = document.getElementById('map') // 지도를 표시할 div
    
            const imageSrc = '/images/product/marker.png' // 마커이미지의 주소입니다
            const imageSize = new window.kakao.maps.Size(64, 69) // 마커이미지의 크기입니다
            const imageOption = { offset: new window.kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    
            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            const markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption
            )
    
            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new window.kakao.maps.services.Geocoder()
            geocoder.addressSearch(props.address, function (result, status) {
              // 정상적으로 검색이 완료됐으면
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                )
    
                const mapOption = {
                  center: coords, // 지도의 중심좌표
                  level: 3,
                }
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                const map = new window.kakao.maps.Map(mapContainer, mapOption)
    
                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                  image: markerImage, // 마커이미지 설정
                })
                map.setCenter(coords)
                marker.setMap(map)
              }
            })
          })
        }
      }, [props.address])
    
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
                <P.Address>
                    {props.data?.fetchUseditem?.useditemAddress && (
                        <div>
                            {/* <p style={{color:'white'}}></p> */}
                            <div>
                                주소:
                                {props.data?.fetchUseditem?.useditemAddress.zipcode}{' '}
                                {props.data?.fetchUseditem?.useditemAddress.address}{' '}
                                {props.data?.fetchUseditem?.useditemAddress.addressDetail}
                            </div>
                            <div id="map" style={{ width: '500px', height: '400px' }}></div>
                        </div>
                    )}                    
                </P.Address>
                
                <>
                    <P.Button onClick={props.onClickModalOpenUsePoint}>
                        구매하기
                    </P.Button>
                    <P.Button onClick={props.onClickDelete}>삭제</P.Button>
                    <P.Button onClick={props.onClickMoveToEdit}>수정</P.Button>
                    <P.Button>목록</P.Button>
                </>
            </P.Wrapper>
            <ProductCommentsWrite/>
            <ProductCommentsList/>
        </>
    )
}