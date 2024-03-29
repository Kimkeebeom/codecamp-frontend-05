import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../src/components/units/board/09-write/BoardWrite.container";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

// 수정페이지
export default function BoardsEditPage() {
  const router = useRouter();

  // 1. router.query.mynumber로 해당 게시글 fetchBoard
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: Number(router.query.mynumber) },
    }
  );
  console.log("asd", data);

  return <BoardWrite isEdit={true} data={data} />;
}
