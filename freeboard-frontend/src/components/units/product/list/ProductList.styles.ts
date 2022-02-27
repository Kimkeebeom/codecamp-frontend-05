import styled from "@emotion/styled";

export const Wrapper = styled.div`
width: 80vw;
margin: 0 auto;
padding-top: 50px;
& > button {
    z-index: 99;
    position: fixed;
    right: 50px;
    bottom: 40px;
    width: 80px;
    height: 50px;
    border-radius: 10px;
    background: gold;
    border: 1px solid gold;
  }
`

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px 20px;
`
export const Listitems = styled.div`
    width: 100%;
    height: 32vw;
    overflow: hidden;
    > div:nth-of-type(1) {
        height: 60%;
        text-align: center;
        vertical-align: middle;
        object-position: center;
        overflow: hidden;
        border: 1px solid black;
        img {
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        height: 100%;
        }
    }
    > div:nth-of-type(2) {
        padding: 20px 10px;
    }
`
export const ListInfor = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Name = styled.div`
    color: white;
    font-size: 0.9rem;
    margin-bottom: 5px;
`
export const Price = styled.div`
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
`
export const CreatedAt = styled.div`
    color: white;
`
export const Footer = styled.div``