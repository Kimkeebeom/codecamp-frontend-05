import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
    /* height: 1562px; */
    /* background-color: white;
    box-sizing: border-box;
    display: row;
    justify-content: space-between;
    margin: 100px;
    padding: 100px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
`

export const WrapperBox = styled.div`
    border: 1px solid black;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const WrapperHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid grey;
    /* background-color: yellow; */
`

export const AvatarWrapper = styled.div`
    /* width: 900px;
    height: 70px;
    display: flex; */
    display: flex;
    flex-direction: row;
    /* background-color: grey; */
`

export const Avatar = styled.img`
    width: 70px;
    margin-right: 10px;
    background: #BDBDBD;
`

export const Info = styled.div`
    /* width: 800px;
    line-height: 28px; */
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeaderWriter = styled.div`
    width: 150px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 34px;
    /* background-color: white; */
`

export const CreatedAt = styled.div`
    width: 150px;
    /* background-color: red; */
`

export const WrapperBody = styled.div`
    /* width: 996px;
    height: 574px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    min-height: 650px;
    /* background-color: green; */
`

export const BodyTitle = styled.div`
    width: 996px;
    height: 54px;
    /* background-color: greenyellow; */
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
`

export const BodyContents = styled.div`
    width: 996px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F2F2;
`

export const Youtube = styled(ReactPlayer)``

export const WrapperBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`

export const Button = styled.button`
    width: 179px;
    height: 45px;
    /* background-color: white; */
    border: 1px solid gray;
    margin: 0px 12px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;

    :hover {
        background-color: gold;
        border-color: white;
  }
`