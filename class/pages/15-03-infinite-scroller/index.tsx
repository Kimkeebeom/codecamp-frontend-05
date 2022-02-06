import { useQuery, gql } from "@apollo/client";
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      _id
    }
  }
`;
export default function CommentEdit() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  const onLoadMore = () => {
    if(!data) return; // 데이터가 없을때에도 인피니트스크롤러는 계속 실행중이기 때문에 
                      // fetchMore를 멈춰주기 위해 데이터 자체가 없을때는 리턴! 오류를 방지!!

    fetchMore({
        variables: { page: Math.ceil(data.fetchBoards.lenth / 10) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
            if(!fetchMoreResult.fetchBoards) {
                return {fetchBoards: [...prev.fetchBoards]}
            } // if 안에 한줄밖에 없으면 {} 생략 가능하나 내겐 아직 생략하기엔 헷갈림 ㅋ

            return{
                fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
            }
        }
    })
  }
 
  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>

      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
            <div>
                <span>
                    {el.title} {el.writer}
                </span> 
            </div>         
        </div>    
      ))}
    </InfiniteScroll>
  );
}