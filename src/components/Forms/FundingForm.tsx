import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { DatePicker, Divider, Form, Input, InputNumber } from 'antd';
const { TextArea } = Input;

interface IFundingFormProps {}

const tailFormCols = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const FundingForm: FunctionComponent<IFundingFormProps> = (props) => {
  return (
    <CommonForm>
      <Divider orientation="left">펀딩 계획을 입력해주세요,</Divider>
      <Form.Item label="목표 금액" name="plan_money">
        <InputNumber addonAfter={'원'} defaultValue={100000} />
      </Form.Item>
      <Divider orientation="left">프로젝트 내용</Divider>
      <Form.Item label="제목">
        <RangePicker format={dateFormat} />
      </Form.Item>
      <Form.Item name={'description'} {...tailFormCols}>
        <TextArea rows={10} placeholder="프로젝트에 대해 소개해주세요." size="large" />
      </Form.Item>
    </CommonForm>
  );
};

export default FundingForm;
