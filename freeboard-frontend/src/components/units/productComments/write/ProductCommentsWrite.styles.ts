import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0px 100px;
`
export const PencilIcon = styled.img``

export const WrapperContents = styled.div`
    border: 1px solid lightgray;
`
export const Contents = styled.textarea`
    width: 100%;
    min-height: 108px;
    padding: 20px;
    border: none;
    border-bottom: 1px solid lightgray;
`
export const WrapperContentsBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ContentsLength = styled.div`
    width: 100%;
    height: 51px;
    line-height: 51px;
    padding-left: 20px;
    color: gray;
`
export const Button = styled.button`
    width: 91px;
    height: 51px;
    background-color: black;
    color: white;
    cursor: pointer;
`