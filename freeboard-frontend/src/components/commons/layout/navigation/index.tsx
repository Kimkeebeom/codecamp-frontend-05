import styled from "@emotion/styled"

const Wrapper = styled.div`
    /* height: 55px; */
    /* background-color: greenyellow; */
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    margin-bottom: 20px;
    border-top: 1.5px solid #A4A4A4;
    border-bottom: 1.5px solid #A4A4A4;
`

export default function LayoutNavigation() {
    return (
        <Wrapper>
            <div>메인페이지</div>
            <div>자유게시판</div>
            <div>상품등록</div>
            <div>마이페이지</div>
        </Wrapper>
    )
}