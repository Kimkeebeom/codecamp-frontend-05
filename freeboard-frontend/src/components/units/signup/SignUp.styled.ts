import styled from '@emotion/styled'

export const LoginBackground = styled.form`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background: url('/images/login-background.png') 50% 50%;
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #fff9ec;
`
export const LoginWrapper = styled.div`
  /* background-color: #e6decf; */
  /* background-color: #fad483; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  display: flex;
  flex-direction: column;
  padding: 30px 35px;
  border-radius: 20px;
  box-shadow: 0.1rem 0.1rem 1.5rem #FDFDFD, -0.1rem -0.1rem 1.5rem #eccce1;
  /* border: 1px solid black; */
  /* img:nth-of-type(1) {
    width: 50%;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  } */
  h2 {
    font-size: 1.5rem;
    color: #03c75a;
    font-weight: 700;
    text-align: center;
    padding: 5px;
  }
  span {
    color: #FDFDFD;
    font-weight: 700;
    margin-bottom: 7px;
    padding-left: 10px;
  }
  p {
    margin: 5px 0 10px;
    padding-left: 10px;
    color: #ff5e00;
    font-weight: 500;
  }
`
export const LoginId = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  outline: 0;
`
export const LoginPassword = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  outline: 0;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 55px;
  margin-top: 20px;
  border: 0;
  border-radius: 15px;
  /* background-color: #03c75a;
  cursor: pointer; */
  /* box-shadow: 0.1rem 0.1rem 1.5rem #03c75a, -0.1rem -0.1rem 1.5rem #03c75a; */
`
