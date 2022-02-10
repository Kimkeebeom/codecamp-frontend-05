import styled from "@emotion/styled"
import router from "next/router"

const Wrapper = styled.div`
    width: 400px;
    height: 2000px;
    border-right: 1px solid grey;
`
const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50px;
    padding-top: 10px;
    cursor: pointer;
`
const MenuBox = styled.div`
    border-radius: 10px;
    background-color: #750675;
    margin-bottom: 10px;
`

export default function LayoutSidebar() {

    const MoveToBoardList = () => {
        router.push("/board/list")
    }
    
    const boardRegister = () => {
        router.push("/board/new")
    }
    
    return (
        <Wrapper>
            <SideMenu>
                <MenuBox onClick={MoveToBoardList}>📄전체 글 보기</MenuBox>
                <MenuBox onClick={boardRegister}>✏새글 작성</MenuBox>
                <MenuBox>🔍키워드 검색</MenuBox>
            </SideMenu>       
        </Wrapper>
    )
 }