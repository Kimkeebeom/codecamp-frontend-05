import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 1200px;
    height: 1847px;
    background-color: white;
    box-sizing: border-box;
    display: row;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`
export const WrapperHeader = styled.div`
    width: 1200px;
    height: 53px;
    display: flex;
    justify-content: center;
`

export const MainTitle = styled.div`
    width: 174px;
    height: 53px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 53px;
    text-align: center;
`

export const Label = styled.div`
    color: black;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`

export const Span = styled.span`
    color: red;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`

export const Writer = styled.span`
    padding-right: 462px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`

export const Pwd = styled.span`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`
export const Spancombined = styled.div`
    width: 996px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    left: 101px;
    top: 193px;
`

export const Name = styled.input`
    width: 486px;
    height: 52px;
`
export const NameError = styled.div`
    width: 486px;
    height: 20px;
    box-sizing: border-box;
     
    left: 0px;
    top: 55px;
`
export const Password = styled.input`
    width: 486px;
    height: 51px;  
`
export const PasswordError = styled.div`
    width: 486px;
    height: 20px;
    box-sizing: border-box;
     
    right: 0px;
    top: 53px;
`

export const Combined = styled.div`
    width: 996px;
    height: 92px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
     
    left: 101px;
    top: 233px;   
`
export const Title = styled.input`
    width: 996px;
    height: 52px;
     
    left: 101px;
    top: 365px;
`

export const TitleError = styled.div`
    width: 996px;
    height: 20px;
     
    left: 101px;
    top: 420px;
`

export const SubTitle = styled.span`
     
    width: 40px;
    height: 24px;
    left: 101px;
    top: 325px;
`

export const SubContent = styled.span`
     
    left: 101px;
    top: 457px;
`

export const Content = styled.textarea`
    width: 996px;
    height: 480px;
    padding-bottom: 450px;
     
    left: 101px;
    top: 497px;
`

export const CntError = styled.div`
    width: 996px;
    height: 20px;
     
    left: 101px;
    top: 520px;
`

export const SubAddress = styled.span`
     
    left: 101px;
    top: 993px; 
`

export const WrapperAddress = styled.div`
    width: 217px;
    height: 78px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
     
    left: 101px;
    top: 1033px;
`

export const Address = styled.input`
    width: 77px;
    height: 52px;
`

export const Search = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
`

export const Click = styled.text`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: white;
`

export const SubPhoto = styled.span`
     
    left: 101px;
    top: 1393px;
`

export const WrapperPhoto = styled.div`
    width: 282px;
    height: 94px;
    display: flex;
     
    left: 101px;
    top: 1433px;
`
export const Button = styled.button`
    width: 179px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 60px;
     
    left: 600px;
    top: 1695px;
    background-color: ${(props) => props.isActive === true ? "yellow" : "grey"};
    :hover {
        cursor: ${(props) => props.isActive === true ? "pointer" : "pointer"};
    }
`
export const MoveToBoardList = styled.button`
    width: 179px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 60px;
     
    left: 400px;
    top: 1695px;
    background-color: ${(props) => props.isActive === true ? "grey" : "yellow"};
    
    :hover {
        cursor: ${(props) => props.isActive === true ? "pointer" : "pointer"};
    }
`