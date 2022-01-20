import styled from "@emotion/styled"

export const MyButton = styled.button`
    background-color: ${(props) => props.onChangeColor === true ? "yellow" : "none"};
`