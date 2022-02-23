import styled from '@emotion/styled'

interface IWordProps{
    isMatched: boolean
}

export const H1 = styled.div`
 color: white;
 font-size: 30px;
`

export const Boundary = styled.div`
    width: 1200px;
    margin: 20px;
    border-bottom: 3px solid black;
`

export const BoundaryContents = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-right: 40px;
    padding-left: 40px;
    height: 70px;
    line-height: 62px; //div안에 있는 글씨 높이를 정렬
    color: white;
`

export const BoundaryHeader = styled.div`   
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
    padding-left: 40px;
    border-top: 3px solid black;
    border-bottom: 2px solid gray;
    color: white;
`
export const Number = styled.div`
    width: 10%;
    text-align: center;
    /* background-color: purple; */
`
export const HeaderNumber = styled.div`
    width: 10%;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const Title = styled.div`   
    width: 70%;
    text-align: center;
    color: white;
    cursor: pointer;
    /* :hover {color: white} */
    /* background-color: red; */
`
export const Word = styled.span`
    color: ${(props: IWordProps) => (props.isMatched ? "gold" : "black")};
`

export const HeaderTitle = styled.div`   
    width: 70%;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const Writer = styled.div`  
    width: 10%;
    text-align: center;
    /* background-color: yellow; */
`
export const HeaderWriter = styled.div`   
    width: 10%;
    font-family: Noto Sans CJK KR;
    font-style: bold;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const CreatedAt = styled.div`   
    width: 11%;
    text-align: center;
    /* background-color: green; */
`
export const HeaderCreatedAt = styled.div`   
    width: 11%;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding-right: 100px;
    padding-left: 90px; */
`

export const Register = styled.button`
    border-radius: 10px;
    display: flex;
    flex-direction: row-reverse;
    width: 172px;
    height: 52px;
    line-height: 46px;
    font-weight: 500;
    font-size: 15px;
    background-color: #FFFFFF;
    cursor: pointer;
    :hover {background-color: #E0F8F7;}
`

// export const BtnBox = styled.div`
//     width: 1200px;
//     height: 100px;
//     padding-top: 24px;
//     /* bottom: 0px
//     right: 0px */
//     display: flex;
//     flex-direction: row-reverse;
// `