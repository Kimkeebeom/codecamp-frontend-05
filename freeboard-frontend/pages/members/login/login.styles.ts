import styled from "@emotion/styled";

export const Wrapper = styled.form`
    /* background-color: yellow; */
    box-sizing: border-box;
    /* max-width: 100%; */
    max-height: fit-content;
    margin: 10px;
    background-image: url(/images/Login/배경사진.png);
`

export const InnerWrapper = styled.form`
    /* background-color: #FDFDFD; */
    border-radius: 6px;
`

export const LogoBox = styled.div`
    /* background-color: purple; */
    color: #03c75a;
    display: flex;
    justify-content: center;
    font-size: 2em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
    padding: 17px 0 15px;
    border-radius: 6px;
    margin-bottom: 10px;
    cursor: pointer;
`

export const EmailBox = styled.input`
    background-color: #FDFDFD;
    /* color: #888; */
    width: 100%;
    padding: 17px 0 15px;
    border-radius: 6px;
    border: 1px solid #dadada;
    margin-bottom: 10px;
`

// export const Input = styled.input`
// `

export const PwdBox = styled.input`
    background-color: #FDFDFD;
    /* color: #888; */
    width: 100%;
    padding: 17px 0 15px;
    border-radius: 6px;
    border: 1px solid #dadada;
    margin-bottom: 10px;
`

export const RadioBodx = styled.div`
    /* background-color: #FDFDFD; */
    color: #FDFDFD;
    width: 100%;
    letter-spacing: +.5px;
    margin-bottom: 10px;
`

export const LoginBtn = styled.button`
    background-color: #03c75a;
    display: block;
    width: 100%;
    padding: 17px 0 15px;
    border-radius: 6px;
    border: solid 1px rgba(0,0,0,.15);
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

export const BottomBox = styled.div`
    /* color: #888; */
    color: #FDFDFD;;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer
`