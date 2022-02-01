// eslint-disable-next-line no-use-before-define
import React, { ChangeEvent, useState } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setPassword] = useState("");
  const [, setId] = useState("")
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeID = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }
  return (
    <>
      <Button type="primary"
      // type="primary" 이부분은 버튼 색깔을 파란색으로 바꿔주는 타입기능 
       onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력 :{" "}
        <input type="password" onChange={onChangePassword} /><br/>
        ID 입력 : {" "}
        <input type="text" onChange={onChangeID} />
      </Modal>
    </>
  );
}
