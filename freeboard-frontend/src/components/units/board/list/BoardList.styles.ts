import styled from '@emotion/styled'

// export const TopLine = styled.div`
//     display: flex;
//     box-sizing: border-box;
//     flex-direction: row;
//     justify-content: space-between;
//     /* padding-right: 5%; */
// `
export const Boundary = styled.div`
    box-sizing: border-box;
    /* position: absolute; */
    width: 1200px;
    /* height: 583px; */
    margin: 100px;
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
`
// export const Column = styled.div`
//     width: 20%;
//     height: auto;
//     border-bottom: 1px solid black;
// `
export const BoundaryHeader = styled.div`
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
    padding-left: 40px;
    border-top: 3px solid black;
    border-bottom: 2px solid gray;
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
    box-sizing: border-box;
    width: 70%;
    text-align: center;
    cursor: pointer;
    :hover {color: gold;}
    /* background-color: red; */
`
export const HeaderTitle = styled.div`
    box-sizing: border-box;
    width: 70%;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const Writer = styled.div`
    box-sizing: border-box;
    width: 10%;
    text-align: center;
    /* background-color: yellow; */
`
export const HeaderWriter = styled.div`
    box-sizing: border-box;
    width: 10%;
    font-family: Noto Sans CJK KR;
    font-style: bold;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const CreatedAt = styled.div`
    box-sizing: border-box;
    width: 11%;
    text-align: center;
    /* background-color: green; */
`
export const HeaderCreatedAt = styled.div`
    box-sizing: border-box;
    width: 11%;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
`

export const Register = styled.button`
    /* position: absolute; */
    /* bottom: 0px
    right: 0px */
    display: flex;
    flex-direction: row-reverse;
    width: 172px;
    height: 52px;
    line-height: 46px;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    :hover {background-color: greenyellow;}
`

export const BtnBox = styled.div`
    width: 1200px;
    height: 100px;
    padding-top: 24px;
    /* bottom: 0px
    right: 0px */
    display: flex;
    flex-direction: row-reverse;
`