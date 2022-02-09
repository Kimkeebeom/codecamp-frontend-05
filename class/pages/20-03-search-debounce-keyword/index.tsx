import { gql, useQuery } from "@apollo/client"
import { useState, ChangeEvent, MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types"
import _ from 'lodash'
import styled from "@emotion/styled"
import { v4 as uuidv4 } from 'uuid'

const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page: Int){
        fetchBoards(search: $search, page: $page){
            _id
            writer
            title
        }
    }
`
interface IProps {
    isMatched: boolean
}

const Word = styled.span`
    color: ${(props: IProps)=>props.isMatched ? "red" : "black"};
`

export default function searchPage(){
    // const [search, setSearch] = useState("")
    const [keyword, setKeyword] = useState("")

    const {data, refetch} = useQuery<
    Pick<IQuery,'fetchBoards'>, 
    IQueryFetchBoardsArgs
    >(FETCH_BOARDS)

    const getDebounce = _.debounce((data)=> {
        refetch({ search: data, page: 1 })
        setKeyword(data)
    }, 1000)
    

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
       getDebounce(event.target.value)
    }

    // const onClickSearch = () => {
    //     refetch({ search: search, page: 1 }) // 검색을 했을 때, 검색된 데이터가 1페이지에서부터 보여줘야하기 때문에 page: 1을 추가
    //     setKeyword(search)
    // }

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if(event.target instanceof Element) // id 부분에 빨간줄이 그어진 부분을 해결하기 위함
        refetch({ search: keyword, page: Number(event.target.id) }) // 입력한 검색어의 특정 페이지를 보여주기 위해 search: keyword 추가
    }

    return(
        <div>
            <h1>검색 페이지!</h1>
            검색어 입력: <input type="text"onChange={onChangeSearch} />
            {/* <button onClick={onClickSearch}>검색</button> */}
            {data?.fetchBoards.map((el) =>(
                <div key={el._id}>
                    <span> {el.writer} </span>
                    <span> 
                        {el.title
                            .replaceAll(keyword, `#$%${keyword}#$%`)
                            .split("#$%")
                            .map((el) => (
                                <Word key={uuidv4()} isMatched={el === keyword ? true : false}>
                                {el}
                                </Word>
                        ))}    
                    </span>
                </div>
            ))}
            {new Array(10).fill(1).map((_, index) => (
                <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
                {` ${index+1} `}
                </span>
            ))}
        </div>
    )
}