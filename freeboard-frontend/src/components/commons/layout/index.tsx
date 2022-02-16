import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(/images/Login/배경사진.png);
    background-repeat: no-repeat;
    background-size: cover;
`
const Div = styled.div`
    max-width: 3500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HIDDEN_BANNER = [
    "/board/new",
    "/board/[move]/edit"
]

const LayoutBody = styled.div`
    max-height: 2700px;
    height: 100%;
    padding-bottom: 100px;
`

interface Iprops {
    children: ReactChild
}
export default function Layout(props : Iprops){
    const router = useRouter();
    console.log(router);

    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
    
    return(
        <Div>
            <LayoutHeader/>
            {!isHiddenBanner && <LayoutBanner/>}
            <LayoutNavigation/>
            <BodyWrapper>
                <LayoutBody>{props.children}</LayoutBody>
            </BodyWrapper>
            <LayoutFooter/>
        </Div>
    )

}