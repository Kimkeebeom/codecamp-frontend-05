import styled from '@emotion/styled'
// import { BookOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

export const MyPageWrapper = styled.div`
  @font-face {
    font-family: 'SB agro M';
    font-weight: normal;
    src: url('/font/sb/sbm.ttf');
  }

  width: 100%;
  text-align: center;
  padding: 50px 0;
  > p {
    font-family: 'SB agro M';
    margin-bottom: 30px;
    font-size: 3rem;
    letter-spacing: 5px;
    font-weight: 700;
  }
`

export const UserContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 0 20px;
  border-radius: 50px;
  box-shadow: 0.1rem 0.1rem 1.5rem #FDFDFD, -0.1rem -0.1rem 1.5rem #eccce1;
`
export const UserImg = styled.div`
  width: 120px;
  height: 120px;
  border: 2px solid #ccc;
  border-radius: 10%;
  overflow: hidden;
  padding: 7px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`
export const UserName = styled.div`
  height: 100px;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    text-transform: uppercase;
    color: #b0b0b0;
    font-size: 1rem;
  }
  span {
    color: #222;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-right: 5px;
  }
`

// export const BookScrap = styled.div`
//   height: 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 20px;
//   border-radius: 20px;
//   :hover {
//     background: #ffe5ad;
//   }
// `
// export const BookList = styled(BookOutlined)`
//   font-size: 2rem;
// `

export const UserOrder = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  div {
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    :hover {
      background: #eccce1;
    }
  }
`

export const UserPoint = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PointButton = styled.button`
  background: none;
  color: #222;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  :active {
    background: none;
    color: #222;
  }
  :focus {
    background: none;
    color: #222;
    border-color: none !important;
  }
  :hover {
    background: #eccce1; // 커서를 올렸을 때, 버튼 배경색이 바뀜
    color: #222;
  }
`

export const PointModal = styled(Modal)``
