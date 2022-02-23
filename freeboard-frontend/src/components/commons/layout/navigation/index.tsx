import styled from "@emotion/styled"
import { useRouter } from "next/router"

const Wrapper = styled.div`
    /* height: 55px; */
    background-color: #fffcf5;
    box-sizing: border-box;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    margin-bottom: 20px;
    border-top: 1.5px solid #dbd8d8;
    border-bottom: 1.5px solid #dbd8d8;
`
const Span = styled.span`
    display: flex;
    cursor: pointer;
    :hover {color:#dbc356;}
`

export default function LayoutNavigation() {
    const router = useRouter()

    const onClickMoveToRendingPage = () => {
        router.push("/Main")
    }

    const onClickMoveToFreeboardPage = () => {
        router.push("/board/list")
    }

    const onClickMoveToProductRegistPage = () => {
        router.push("/product/new")
    }

    const onClickMoveToMypage = () => {
        router.push("/members/mypage")
    }


    return (
        <Wrapper>
            <Span onClick={onClickMoveToRendingPage}>메인페이지</Span>
            <Span onClick={onClickMoveToFreeboardPage}>자유게시판</Span>
            <Span onClick={onClickMoveToProductRegistPage}>상품등록</Span>
            <Span onClick={onClickMoveToMypage}>마이페이지</Span>
        </Wrapper>
    )
}