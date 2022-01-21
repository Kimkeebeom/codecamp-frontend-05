import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 20%;
`;

export default function MapCheckboxPage() {
  // const { data: aaa } = useQuery(FETCH_BOARDS) 중괄호 안의 data 이름을 바꾸고 싶을땐 예시코드처럼 바꿔야 한다.
  // const { data: bbb  } = useQuery(FETCH_BOARDS_COMMENTS)

  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
        </Row>
      ))}
    </div>
  );
}
