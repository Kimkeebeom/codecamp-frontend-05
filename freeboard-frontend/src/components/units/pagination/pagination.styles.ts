import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}
export const Pagenation = styled.span`
font-size: 18px;
font-style: oblique;
margin: 0px 20px;
color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;