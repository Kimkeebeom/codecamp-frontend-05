import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
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
`

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const Info = styled.div`
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
`
export const CreatedAt = styled.div`
    width: 150px;
`

export const WrapperBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    min-height: 650px;
    align-items: center;
`

export const BodyTitle = styled.div`
    width: 996px;
    height: 54px;
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

export const BodayImageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Image = styled.img`
    width: 300px;
    height: 300px;
`

export const WrapperBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`

export const Button = styled.button`
    width: 179px;
    height: 45px;
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

