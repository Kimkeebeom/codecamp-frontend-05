import React, { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

const onCompleteDaumPostCode = (data: any) => {
  // console.log(data);
  setAddress(data.address);
  setZonecode(data.zonecode);
  setIsModalVisible(false);
}

  return (
    <>
      <Button type="primary" onClick={showModal}>
        우편번호 검색
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={onCompleteDaumPostCode}/>
      </Modal>
    </>
  );
}
