import { gql, useMutation, useQuery } from "@apollo/client"
import { update } from "lodash"
import { IMutation, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../src/commons/types/generated/types"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){ # 게시판 상세보기만 해당
        fetchBoard(boardId: $boardId){
            _id
            likeCount
        }
    }
`

const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId: $boardId) # 안에 들어가는 정보가 객체가 아닌 int이기 때문에 중괄호{}가 필요없다
    }
`

export default function OptimisticUIPage(){
    const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
    >(LIKE_BOARD)

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD, {
        variables: {boardId: "62088ce88cd4860029b4ac29"}
    })

    const onClickOptimisticUI = () => {
        likeBoard({
            variables:{
                boardId: "62088ce88cd4860029b4ac29" // Backend05에서 하드코딩함
            }, // 그 안에 있는 내용들 다 나오게끔 코딩하고 해당하는 버튼을 눌러줬을 때 해당되는 ID에대해서 likeboard를 실시해줘야 함!
            // refetchQueries: [ // 성능이 느린 관계로 optimistic-ui로 대체함
            //     {query: FETCH_BOARD, variables: {boarId: "62088ce88cd4860029b4ac29"}}
            // ]

            optimisticResponse: {
                // likeBoard: Number(data?.fetchBoard.likeCount)
                likeBoard: (data?.fetchBoard.likeCount || 0) + 1 
                // 데이터값이 없으면 0으로 간주하고 있으면 0 + 1을 해서 1로 만들어줘!
            },
            // 요청해서 받아온 결과를 data에 담음
                update(cache, {data}){
                cache.writeQuery({
                    query: FETCH_BOARD, // query가 같다고 다 같은 query가 아니므로 varibles를 포함해서 같이 요청해야 구분이 된다.
                    variables: {boardId: "62088ce88cd4860029b4ac29"},
                    data: {
                        fetchBoard: { // key가 fetchBoard이다.
                            _id: "62088ce88cd4860029b4ac29", // ID 별로 cache-state가 저장을 하기때문에 _id도 필요함
                            __typename: "Board", // doc부분에서 fetchBoard의 return부분이 Board이기때문에 작성해줌(backend05)
                            likeCount: data?.likeBoard // 실제 결과물(좋아요를 눌렀을때 변경되는 data)
                        }
                    }
                })
            }
        })
    }
    
    return(
        <div>
            <h1>옵티미스틱UI</h1>
            <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
            <button onClick={onClickOptimisticUI}>좋아요 올리기!!</button>
        </div>
    )
}