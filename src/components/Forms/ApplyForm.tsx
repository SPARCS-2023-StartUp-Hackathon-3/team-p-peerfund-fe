import React from 'react';
import CommonForm from '@/components/CommonForm';
import { fullColumn } from './meta';

import { Form, Select, Input } from 'antd';
const { TextArea } = Input;

const ApplyForm = () => {
  return (
    <>
      <CommonForm formCols={fullColumn}>
        <Form.Item label={<label style={{ color: 'white' }}>희망 직무</label>} name="apply_type">
          <Select placeholder="희망 직무를 선택해주세요." size="large">
            <Select.Option value="pm">기획자</Select.Option>
            <Select.Option value="designer">디자이너</Select.Option>
            <Select.Option value="frontend">프론트엔드</Select.Option>
            <Select.Option value="backend">백엔드</Select.Option>
            <Select.Option value="etc">기타</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={'message'} label={'보내는 메세지'}>
          <TextArea rows={3} size="large" />
        </Form.Item>
      </CommonForm>
    </>
  );
};

export default ApplyForm;
