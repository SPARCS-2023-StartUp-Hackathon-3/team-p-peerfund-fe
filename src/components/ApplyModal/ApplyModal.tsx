import React from 'react';
import { Button, Modal } from 'antd';

interface IApplyModal {
  title: string;
  isModalOpen: boolean;
  toggleModal: () => void;
}
const ApplyModal = ({ title, isModalOpen, toggleModal }: IApplyModal) => {
  return (
    <Modal title={title} centered open={isModalOpen} onOk={toggleModal} onCancel={toggleModal} width={1200}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ApplyModal;
