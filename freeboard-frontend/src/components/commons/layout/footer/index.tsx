import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 100px;
    /* background-color: goldenrod; */
    font-size: 20px;
`

export default function LayoutFooter(){
    return (
        <Wrapper>
            Copyright © 2022 Apple Inc. 모든 권리 보유.
            개인정보 처리방침 | 
            웹 사이트 이용 약관 |
            판매 및 환불 |
            법적 고지 |
            사이트 맵
            사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2011-서울강남-00810호 | 대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로 517 | 대표전화 : 02-6712-6700 | 팩스 : 02-6928-0000
        </Wrapper>
    )
}