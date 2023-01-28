import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { Divider, Form, Input, InputNumber } from 'antd';
import InnerForm from './subComponents/InnerForm';
import { fullColumn } from './meta';
const { TextArea } = Input;

interface IItemFormProps {}

const ItemForm: FunctionComponent<IItemFormProps> = (props) => {
  return (
    <CommonForm>
      <Divider orientation="left">아이템 만들기</Divider>
      <InnerForm>
        <Form.Item label="아이템 이름" name={'item_name'}>
          <Input placeholder="아이템 이름을 입력해주세요" size="large" />
        </Form.Item>
        <Form.Item label="아이템 금액" name="item_price">
          <InputNumber addonAfter={'원'} defaultValue={1000} />
        </Form.Item>
        <Form.Item label="아이템 설명" name={'item_description'} {...fullColumn}>
          <TextArea rows={10} placeholder="옵션 항목을 입력해주세요." size="large" />
        </Form.Item>
      </InnerForm>
    </CommonForm>
  );
};

export default ItemForm;
