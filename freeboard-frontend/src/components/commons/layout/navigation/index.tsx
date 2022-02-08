import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 100px;
    background-color: greenyellow;
    font-size: 50px;
    display: flex;
    justify-content: space-between;
    line-height:90px;
`

export default function LayoutNavigation() {
    return (
        <Wrapper>
            <div>뇌에비페이지</div>
            <div>자유게시판</div>
            <div>게시판목록</div>
            <div>마이페이지</div>
        </Wrapper>
    )
}