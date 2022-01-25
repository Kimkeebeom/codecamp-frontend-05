import React, { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressRefactoring() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  
  const onToggleModal = () => {
    setIsModalVisible((prev) => (!prev));
  };
  const onCompleteDaumPostCode = (data: any) => {
    // console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        우편번호 검색
      </Button>
      {isModalVisible && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={onCompleteDaumPostCode} />
        </Modal>
      )}
    </>
  );
}
