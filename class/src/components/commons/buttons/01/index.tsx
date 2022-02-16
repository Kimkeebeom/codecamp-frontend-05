import styled from "@emotion/styled"

interface ILoginBtnProps {
    isValid: boolean
}

const LoginBtn = styled.button`
    background-color: ${(props: ILoginBtnProps)=>
    props.isValid ? "yellow" : ""};
`

export default function Button01(props){
   return ( 
    <LoginBtn type={props.type} isValid={props.isValid}>
        {props.name}
    </LoginBtn> 
   ) 
}