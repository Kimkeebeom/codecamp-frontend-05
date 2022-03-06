import { withAuth } from '../../../commons/hocs/withAuth'
import * as A from './Main.styled'

const MainUI = (props) => {
  return (
    <>
      <props.Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </props.Head>
      <A.MyPageWrapper>
        {/* <p>마이페이지</p> */}
        <A.UserContainer>
          <A.UserImg>
            <img src="/images/Login/noRegisterImgUser.png" />
          </A.UserImg>
          <A.UserName>
            <div>
              <span>{props.data?.fetchUserLoggedIn.name}</span>님
            </div>
            {/* <div>[ {props.data?.fetchUserLoggedIn.email} ]</div> */}
            <div>{props.data?.fetchUserLoggedIn.userPoint.amount} 포인트</div>
            <div></div>
          </A.UserName>
          {/* <A.BookScrap>
            <A.BookList />
            <div>스크랩</div>
          </A.BookScrap> */}
          <A.UserOrder>
            <div>주문정보</div>
            <div>구매 내역</div>
            <div>판매 내역</div>
          </A.UserOrder>
          <A.UserPoint>
            {/* <div>전체 주문 내역</div> */}
            <A.PointButton
              onClick={() => props.setVisible(true)}
              style={{ cursor: 'pointer' }}
            >
              포인트충전
            </A.PointButton>
            <A.PointModal
              centered
              visible={props.visible}
              onOk={props.onClickPayment}
              onCancel={() => props.setVisible(false)}
              okText="충전하기"
              cancelText="취소하기"
              width={'500px'}
            >
              <select name="price" onChange={props.onChangeAmount}>
                <option selected disabled>
                  충전금액을 선택해주세요
                </option>
                <option value="100">100 포인트</option>
                <option value="1000">1000 포인트</option>
                <option value="2000">2000 포인트</option>
                <option value="3000">3000 포인트</option>
                <option value="4000">4000 포인트</option>
                <option value="5000">5000 포인트</option>
              </select>
            </A.PointModal>
          </A.UserPoint>
        </A.UserContainer>
      </A.MyPageWrapper>
    </>
  )
}

export default withAuth(MainUI)
