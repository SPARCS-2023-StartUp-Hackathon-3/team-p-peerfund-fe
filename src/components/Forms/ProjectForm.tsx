import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { Divider, Form, Input, Select } from 'antd';
import InnerForm from './subComponents/InnerForm';
const { TextArea } = Input;

interface IProjectFormProps {}

const tailFormCols = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const ProjectForm: FunctionComponent<IProjectFormProps> = (props) => {
  return (
    <CommonForm>
      <Divider orientation="left">프로젝트 정보</Divider>
      <InnerForm>
        <Form.Item label="모집 구분" name="apply_type">
          <Select placeholder="스터디 / 프로젝트" size="large">
            <Select.Option value="study">스터디</Select.Option>
            <Select.Option value="proejct">프로젝트</Select.Option>
          </Select>
        </Form.Item>
      </InnerForm>
      <Divider orientation="left">프로젝트 내용</Divider>
      <InnerForm>
        <Form.Item label="제목">
          <Input placeholder="글 제목을 입력해주세요." size="large" />
        </Form.Item>
        <Form.Item name={'description'} {...tailFormCols}>
          <TextArea rows={10} placeholder="프로젝트에 대해 소개해주세요." size="large" />
        </Form.Item>
      </InnerForm>
    </CommonForm>
  );
};

export default ProjectForm;
