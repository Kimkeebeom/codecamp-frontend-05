import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "김기범"
      title: "노제란?"
      contents: "댄서?ㄴㄴ 노드제이에스"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutations() {
  const [aaa, setAaa] = useState<string>("");
  const [qqq] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const zzz = async () => {
    // const result = await axios.get("https:koreanjson.com/posts/1")
    const result = await qqq();
    console.log(result.data?.createBoard?.message);
    setAaa(result.data?.createBoard?.message || "아무 스트링"); // setAaa를 스트링으로 지정해줬기 때문에 결과값이 없으면 "아무스트링"으로 받아와줘!
  };

  return (
    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}
