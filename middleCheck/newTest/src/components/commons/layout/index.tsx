import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutSidebar from "./sidebar";

const BodyWrapper = styled.div`
    display: flex;
    max-height: 5000px;
    height: 100%;
    background-image: url(/images/layout/1643803471874.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
`
const Div = styled.div`
    max-width: 3500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const BodyMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LayoutBody = styled.div`
    max-height: 2700px;
    height: 100%;
    padding-bottom: 100px;
`


const HIDDEN_BANNER = [
    "/board/new",
    "/board/[move]/edit"
]

interface Iprops {
    children: ReactChild
}
export default function Layout(props : Iprops){
    const router = useRouter();
    console.log(router);

    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
    
    return(
        <Div>            
            <LayoutNavigation/>
            <BodyWrapper>    
             <LayoutSidebar/>
                <BodyMainWrapper>
                    {!isHiddenBanner && <LayoutBanner/>}
                    <LayoutBody>{props.children}</LayoutBody>
                </BodyMainWrapper>    
            </BodyWrapper>
            <LayoutFooter/>
        </Div>
    )

}