import FlexCenter from '@/components/FlexCenter';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import React, { FunctionComponent } from 'react';
import { fullColumn } from '../meta';

interface IAppendFormItemProps {
  name: string;
  label?: string;
  appendFormItem: (index: number, ...restField: any) => any;
}

const AppendFormItem: FunctionComponent<IAppendFormItemProps> = (props) => {
  const { name, label, appendFormItem, ...formRest } = props;
  return (
    <Form.List name={name} {...formRest}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name: index, ...restField }) => (
            <FlexCenter key={key} style={{ justifyContents: 'space-between' }}>
              {appendFormItem(index, restField)}
              <MinusCircleOutlined style={{ fontSize: 25, marginLeft: 10 }} onClick={() => remove(index)} />
            </FlexCenter>
          ))}
          <Form.Item {...fullColumn}>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              {label}
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default AppendFormItem;
