import { gql, useQuery } from "@apollo/client"
import _ from "lodash"
import { ChangeEvent, useState, MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types"

const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page: Int) {
        fetchBoards(search: $search, page: $page){
            _id
            writer
            title
        }
    }
`

export default function SearchPage(){
    // const [search, setSearch] = useState("")
    const [keyword, setKeyword] = useState("")

    const {data, refetch} = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs>
    (FETCH_BOARDS)

    const getDebounce = _.debounce((data) => {
        refetch({search: data, page: 1})
        setKeyword(data)
    }, 200)

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value)
    }

    // const onClickSearch = () => {
    //     refetch({search: search, page: 1}) // 검색한 결과를 어느 페이지로 보여줄 것인지 !
    //     setKeyword(search)
    // }

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if(event.target instanceof Element) // 만약에 event.target이 뭔지 모르고
        // Element하면 tag인데 tag의 인스턴스이다. 태그에 포함되어있다 => 태그에는 아이디가 있으니까 이해할 수 있고 사용할 수 있게 됨
        refetch({ search: keyword, page: Number(event.target.id)}) // keyword는 페이지를 눌렀을 때, 이전에 검색했던 데이터를 유지시키기 위한 스테이트!
    }

    return(
        <div>
            <input type="text" onChange={onChangeSearch} placeholder="검색어 입력"/>
            {/* <button onClick={onClickSearch}>검색</button> */}
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span> {el.writer} </span>
                    <span> {el.title} </span>
                </div>
            ))}
            {new Array(10).fill(1).map((_, index) => (
                <span key={index} onClick={onClickPage} id={String(index + 1)}>
                {` ${index+1} `}
                </span>
            ))}
        </div>
    )
} 