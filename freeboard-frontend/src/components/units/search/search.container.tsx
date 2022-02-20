import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import _ from "lodash"
import { ChangeEvent, useState, MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types"
import { v4 as uuidv4} from 'uuid'

// const FETCH_BOARDS = gql`
//     query fetchBoards($search: String, $page: Int) {
//         fetchBoards(search: $search, page: $page){
//             _id
//             writer
//             title
//         }
//     }
// `

interface Iprops{
    isMatched: boolean
}

const Word = styled.span`
    color: ${(props: Iprops)=> props.isMatched ? "red" : "black"};
`

export default function SearchPage(props){
    // const [search, setSearch] = useState("")
    // const [keyword, setKeyword] = useState("")

    // const {data, refetch} = useQuery<
    // Pick<IQuery, 'fetchBoards'>,
    // IQueryFetchBoardsArgs>
    // (FETCH_BOARDS)

    const getDebounce = _.debounce((data) => {
        props.refetch({search: data, page: 1})
        props.refetchBoardsCount({search: data})
        props.onChangeKeyword(data)
    }, 200)

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value)
    }

    // const onClickSearch = () => {
    //     refetch({search: search, page: 1}) // 검색한 결과를 어느 페이지로 보여줄 것인지 !
    //     setKeyword(search)
    // }

    // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    //     if(event.target instanceof Element) // 만약에 event.target이 뭔지 모르고
    //     // Element하면 tag인데 tag의 인스턴스이다. 태그에 포함되어있다 => 태그에는 아이디가 있으니까 이해할 수 있고 사용할 수 있게 됨
    //     refetch({ search: props.keyword, page: Number(event.target.id)}) // keyword는 페이지를 눌렀을 때, 이전에 검색했던 데이터를 유지시키기 위한 스테이트!
    // }

    return(
        <div>
            <input type="text" onChange={onChangeSearch} placeholder="검색어 입력"/>
            {/* <button onClick={onClickSearch}>검색</button>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span> {el.writer} </span>
                    <span> 
                        {el.title.replaceAll(keyword, `#$%${keyword}#$%`).split("#$%").map((el)=>(
                            // el === keyword ? true : false -> el이 검색된 키워드와 같으면 true값(빨간색) 다르면 false값(검은색)
                            // isMatched는 그냥 props로 넘겨주고받을 변수(마음대로 이름을 바꿀 수 있음)
                            // {el === keyword ? true : false} => {el === keyword} 이렇게 쓸 수 있음! 같은 의미!
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
            ))} */}
        </div>
    )
} 