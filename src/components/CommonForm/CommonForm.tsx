import { Form, FormInstance } from 'antd';
import React, { FunctionComponent } from 'react';

interface IFormCols {
  labelCol?: {
    span: number;
  };
  wrapperCol?: {
    span: number;
  };
}

interface ICommonFormProps {
  children?: any;
  formInstance?: FormInstance<any>;
  formCols?: IFormCols;
  onFieldsChange?: (changedFields: any[], allFields: any[]) => void;
}

const { useForm } = Form;

const defaultFormCols = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CommonForm: FunctionComponent<ICommonFormProps> = (props) => {
  const { children, formInstance = null, formCols = defaultFormCols, onFieldsChange } = props;
  const [contextForm] = useForm();

  const form = formInstance || contextForm;

  return (
    <Form
      form={form}
      onFieldsChange={(changedFields: any[], allFields: any[]) => {
        console.log('changedFields', changedFields);
        console.log('allFields', allFields);
        onFieldsChange?.(changedFields, allFields);
      }}
      {...formCols}
    >
      {children}
    </Form>
  );
};

export default CommonForm;
