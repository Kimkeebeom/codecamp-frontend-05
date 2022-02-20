import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";

const Div = styled.div`
    max-width: 3000px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HIDDEN_BANNER = [
    "/board/new",
    "/board/[move]/edit",
    "/members/login/login.container"
]

const HIDDEN_NAVIGATION = [
    "/members/login/login.container"
]

const BodyWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 30px 0px 0px 0px;
    background-image: url(/images/Login/배경사진.png);
    background-repeat: no-repeat;
    background-size: cover;
`

const LayoutBody = styled.div`
    /* max-height: 5000px; */
    /* height: 100%; */
    padding-bottom: 100px;
`

interface Iprops {
    children: ReactChild
}
export default function Layout(props : Iprops){
    const router = useRouter();
    console.log(router);

    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
    const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath)
    
    return(
        <Div>
            <LayoutHeader/>
            {!isHiddenBanner && <LayoutBanner/>}
            {!isHiddenNavigation && <LayoutNavigation/>}
            <BodyWrapper>
                <LayoutBody>{props.children}</LayoutBody>
            </BodyWrapper>
            <LayoutFooter/>
        </Div>
    )

}