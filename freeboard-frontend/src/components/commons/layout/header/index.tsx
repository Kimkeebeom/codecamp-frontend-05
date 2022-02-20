import styled from "@emotion/styled"
import { useRouter } from "next/router"
// import Slider from "react-slick"

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 30px;
    /* background-color: skyblue; */
    font-size: 20px;
`

const NaviWrapper = styled.div`
    display: flex;
    cursor: pointer;
    /* :hover {color:#69e6a7;} */
`

export default function LayoutHeader() {

    const router = useRouter()

    const moveToLoginPage = () => {
        router.push("/members/login/login.container")
    }
   return (
    <Wrapper>
        <NaviWrapper>
            <span> 회원가입 | </span>
            <span onClick={moveToLoginPage}> 로그인 | </span>
            <span> 마이페이지 </span>
        </NaviWrapper>   
    </Wrapper>
    )
}