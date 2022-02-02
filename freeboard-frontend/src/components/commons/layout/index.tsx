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
    background-image: url(/images/layout/1643803471874.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
`
const Div = styled.div`
    max-width: 3000px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HIDDEN_BANNER = [
    "/board/new",
    "/board/[move]/edit"
]

const LayoutBody = styled.div``

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