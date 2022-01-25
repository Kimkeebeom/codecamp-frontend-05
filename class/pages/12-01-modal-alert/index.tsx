import { Modal } from "antd";

export default function ModalAlertPage() {
    const onClickSuccess = () => {
        Modal.success({content: "게시물 등록 성공"});
    }
    const onClickFail = () => {
        // console.log(Modal.error({content: "비밀번호가 틀렸습니다."}));
     Modal.confirm({content: "게시물 등록 실패"});
    }
  return (
    <div>
      <button onClick={onClickSuccess}>알림창 나타내기!!(성공)</button>
      <button onClick={onClickFail}>알림창 나타내기!!(실패)</button>
    </div>
  );
}