import styled from "@emotion/styled";
import { Rate } from "antd";

export const Boundary = styled.div`
    width: 1200px;
    margin: 0px 100px;
    /* height : 100px; */
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
    background-color: greenyellow;
`

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
`

export const Avartar = styled.img`
    width: 48px;
    height: 48px;
`;

export const MainBox = styled.div`
    width: 100%;
    background-color: red;
`

export const WriterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: peru;
    line-height: 20px;
    padding-left: 10px;
`

export const Writer = styled.div`
    font-family: cursive;
    font-style: normal;
`

export const Rating = styled(Rate)`
    padding-left: 10px;
`;

export const ContentsBox = styled.div`
    width: 100%;
    padding-left: 10px;
    /* padding-bottom: 20px;
    padding-left: 60px; */
    background-color: mediumorchid;
`

export const IconBox = styled.div`
    display: flex;
`

export const UpdateIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const DeleteIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const CommentDeletePassword = styled.input`
    width: 100%;
    margin-top: 10px;
`

export const CreatedAt = styled.div`

`