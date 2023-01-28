import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { Divider, Form, Input, Select, Upload } from 'antd';
import InnerForm from './subComponents/InnerForm';
import { PlusCircleOutlined } from '@ant-design/icons';
import { fullColumn } from './meta';
const { TextArea } = Input;

interface IProjectFormProps {}

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
        <Form.Item name={'description'} {...fullColumn}>
          <TextArea rows={10} placeholder="프로젝트에 대해 소개해주세요." size="large" />
        </Form.Item>
        <Form.Item label="프로젝트 대표 이미지" valuePropName="fileList" {...fullColumn}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusCircleOutlined style={{ fontSize: 40 }} />
            </div>
          </Upload>
        </Form.Item>
        <Form.Item name={'youtube_link'} label={'프로젝트 대표 영상'} {...fullColumn}>
          <Input placeholder="YouTube 링크로 추가해주세요." size="large" />
        </Form.Item>
        <Form.Item name={'tag'} label={'검색태그'} {...fullColumn}>
          <TextArea rows={4} size="large" />
        </Form.Item>
      </InnerForm>
    </CommonForm>
  );
};

export default ProjectForm;
