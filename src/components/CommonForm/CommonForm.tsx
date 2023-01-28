import { Form, FormInstance } from 'antd';
import React, { FunctionComponent } from 'react';

interface IFormCols {
  labelCol?: any;
  wrapperCol?: any;
}

interface ICommonFormProps {
  children?: any;
  formInstance?: FormInstance<any>;
  formCols?: IFormCols;
  onFieldsChange?: (changedFields: any[], allFields: any[]) => void;
}

const { useForm } = Form;

const defaultFormCols = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
    md: {
      span: 4,
    },
    lg: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
    md: {
      span: 20,
    },
    lg: {
      span: 20,
    },
  },
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
