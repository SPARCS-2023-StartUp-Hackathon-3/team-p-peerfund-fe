import React, { FunctionComponent } from 'react';
import { Form } from 'antd';
import styled from 'styled-components';
import { fullColumn } from '../meta';
import palette from '@/style/palette';

interface ITextFormItemProps {
  title: string;
  description: string;
}

const { lightgrey } = palette;

const HintText: any = styled.span`
  color: ${lightgrey} !important;
  font-size: 14px;
`;

const TextFormItem: FunctionComponent<ITextFormItemProps> = ({ title, description }) => {
  return (
    <Form.Item label={title} {...fullColumn}>
      <div>
        <HintText>{description}</HintText>
      </div>
    </Form.Item>
  );
};

export default TextFormItem;
