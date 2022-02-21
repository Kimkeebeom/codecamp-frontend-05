import styled from "@emotion/styled"
import { useRouter } from "next/router"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    height: 50px;
    background-color: #feffff;
    font-size: 20px;
`

const TopWrapper = styled.div`
    height: 10px;
    background-color: #d3d9ec;
`
//#faedc9
//#d3d9ec

const NaviWrapper = styled.div`
    display: flex;
    /* justify-content: space-around; */
    justify-content: space-between;
    background-color: #eccce1;
    padding: 0px 15px 0px 15px;
`

const SpanBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    /* background-color: red; */
`

const Span = styled.span`
    display: flex;
    /* word-spacing: 5px; */
    cursor: pointer;
    :hover {color:#dbc356;}
`

const LogoBox = styled.div``

const LoginAuthBox = styled.div``

export default function LayoutHeader() {

    const router = useRouter()

    const moveToLoginPage = () => {
        router.push("/members/login/login.container")
    }
   return (
    <Wrapper>
        <TopWrapper/>
        <NaviWrapper>
            <SpanBox>
                <Span> Join </Span>
                <Span onClick={moveToLoginPage}> Login </Span>
                <Span> Mypage </Span>
            </SpanBox>
            <LogoBox></LogoBox>
            <LoginAuthBox>님 환영합니다!</LoginAuthBox>
        </NaviWrapper>   
    </Wrapper>
    )
}