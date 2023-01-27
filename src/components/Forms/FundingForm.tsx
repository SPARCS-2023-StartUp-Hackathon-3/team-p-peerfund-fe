import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { Divider, Form, Input, Select } from 'antd';
const { TextArea } = Input;

interface IFundingFormProps {}

const tailFormCols = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const FundingForm: FunctionComponent<IFundingFormProps> = (props) => {
  return (
    <CommonForm>
      <Divider orientation="left">펀딩 계획을 입력해주세요,</Divider>
      <Form.Item label="목표 금액" name="plan_money"></Form.Item>
      <Divider orientation="left">프로젝트 내용</Divider>
      <Form.Item label="제목">
        <Input placeholder="글 제목을 입력해주세요." size="large" />
      </Form.Item>
      <Form.Item name={'description'} {...tailFormCols}>
        <TextArea rows={10} placeholder="프로젝트에 대해 소개해주세요." size="large" />
      </Form.Item>
    </CommonForm>
  );
};

export default FundingForm;
