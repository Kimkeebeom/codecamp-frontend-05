import styled from "@emotion/styled"

interface ILoginBtnProps {
    isValid: boolean
}

const LoginBtn = styled.button`
    color: #FAFAFA;
    background-color: ${(props: ILoginBtnProps) =>
    props.isValid ? "purple" : "black"};
    cursor: pointer;
    :hover {color: gold;}
`

export default function QuizBtn01(props){
    return(
        <LoginBtn type={props.type} isValid={props.isValid}>
            {props.name}
        </LoginBtn>
    )
}