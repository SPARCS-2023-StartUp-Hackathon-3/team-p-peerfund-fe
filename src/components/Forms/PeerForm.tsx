import React, { FunctionComponent } from 'react';
import CommonForm from '@/components/CommonForm';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import InnerForm from './subComponents/InnerForm';
import { fullColumn } from './meta';
import AppendFormItem from './subComponents/AppendFormItem';
import styled from 'styled-components';
import DefaultLayout from '../DefaultLayout';
import palette from '@/style/palette';
import FlexCenter from '../FlexCenter';
const { primary, white } = palette;
const { TextArea } = Input;

interface IPeerFormProps {}

export const DarkH1 = styled.span`
  font-size: 30px;
  font-weight: bolder;
`;

export const RoundNumber = styled.span`
  font-size: 25px;
  color: ${white};
  background-color: ${primary};
  display: inline-flex;
  color: #ffffff;
  background-color: #601ac3;
  border-radius: 20px;
  font-weight: bolder;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 2px;
`;

const PeerForm: FunctionComponent<IPeerFormProps> = (props) => {
  return (
    <DefaultLayout>
      <CommonForm formCols={fullColumn}>
        <FlexCenter>
          <DarkH1 style={{ display: 'inline-block', marginBottom: 10 }}>
            <RoundNumber style={{ marginRight: 5 }}>1</RoundNumber>PEER 모집 정보를 입력해주세요.
          </DarkH1>
          <Button type="default" style={{ marginLeft: 'auto' }}>
            임시 저장
          </Button>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
            작성 완료
          </Button>
        </FlexCenter>
        {/* <Divider orientation="left">구인 정보를 입력해주세요.</Divider> */}
        <InnerForm>
          <Form.Item label="모집 구분" name="apply_type" required>
            <Select placeholder="스터디 / 프로젝트" size="large">
              <Select.Option value="study">스터디</Select.Option>
              <Select.Option value="proejct">프로젝트</Select.Option>
            </Select>
          </Form.Item>
          {/* <Form.Item label="목표 참여 인원" name="people">
          <InputNumber addonAfter={'명'} defaultValue={5} />
        </Form.Item> */}
          {/* <Form.Item label="구인 직무" name="position" required>
          <Select defaultValue={'designer'} size="large">
            <Select.Option value="designer">디자이너</Select.Option>
            <Select.Option value="developer">개발자</Select.Option>
            <Select.Option value="director">기획자</Select.Option>
          </Select>
        </Form.Item> */}
          <AppendFormItem
            name={'positions'}
            label={'구인 직무 추가하기'}
            {...fullColumn}
            appendFormItem={(index, ...restField) => {
              return (
                <>
                  <div>
                    <Form.Item label="구인 직무" name={[index, 'position']} required {...restField} {...fullColumn}>
                      <Select defaultValue={'designer'} size="large" style={{ width: 165 }}>
                        <Select.Option value="designer">디자이너</Select.Option>
                        <Select.Option value="developer">개발자</Select.Option>
                        <Select.Option value="director">기획자</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="구인 인원"
                      name={[index, 'position_count']}
                      required
                      {...restField}
                      {...fullColumn}
                    >
                      <InputNumber addonAfter={'명'} defaultValue={2} size="large" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label={'직무 요구사항'}
                    name={[index, 'position_description']}
                    style={{ flex: 1 }}
                    {...fullColumn}
                  >
                    <TextArea rows={5} placeholder="프로젝트에 대해 소개해주세요." size="large" />
                  </Form.Item>
                </>
              );
            }}
          />
          <Form.Item
            label="디파짓 요금"
            name="deposit_price"
            extra={'0원 으로 입력시 디파짓 없이 신청받을 수 있습니다'}
          >
            <InputNumber addonAfter={'원'} defaultValue={0} />
          </Form.Item>
        </InnerForm>
        {/* <Divider orientation="left">프로젝트 내용</Divider> */}
        <DarkH1 style={{ display: 'inline-block', marginBottom: 10 }}>
          <RoundNumber style={{ marginRight: 5 }}>2</RoundNumber>프로젝트 내용을 입력해주세요.
        </DarkH1>
        <InnerForm>
          <Form.Item label="제목">
            <Input placeholder="글 제목을 입력해주세요." size="large" />
          </Form.Item>
          <Form.Item name={'description'} {...fullColumn}>
            <TextArea rows={10} placeholder="프로젝트에 대해 소개해주세요." size="large" />
          </Form.Item>
        </InnerForm>
      </CommonForm>
    </DefaultLayout>
  );
};

export default PeerForm;
