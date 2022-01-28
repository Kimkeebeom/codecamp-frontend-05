import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
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
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

//   const [isEdit, setIsedit] = useState(false);

  const [isEdits, setIsedits] = useState([
      false,false,false,false,false,false,false,false,false,false
    ]);

  const onClickIsEdit = (event) => {
      console.log(event.target.id);
      const aaa = isEdits // 임시로 aaa에 isEdit를 담음
      aaa[event.target.id] = true // 클릭한 댓글만 바뀌게 됨 
      setIsedits([...aaa]); // 얕은 복사로 복사해줌
      // setIsedits(true);
  }
 
  return (
    <div>
      <h1>댓글 수정 연습!!</h1>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
            {isEdits[index] === false && ( //isEdit가 false면 기본화면
                <div>
                    <span>
                        {el.title} {el.writer}
                    </span> 
                    <button id={index} onClick={onClickIsEdit}>수정하기</button>
                </div>
            )} {isEdits[index] === true && ( // isEdit가 true면 수정하기 화면
                <div>
                    <div>=========================</div>
                    <div>이것은 수정하기 화면입니다.</div>
                    <div>=========================</div>
                </div>
            )}
          
        </div>
    
      ))}
    </div>
  );
}