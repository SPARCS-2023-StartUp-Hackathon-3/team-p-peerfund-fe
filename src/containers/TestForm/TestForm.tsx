import React, { FunctionComponent, useState } from 'react';
import { Select } from 'antd';
import FormSelector, { FormType } from '@/components/Forms/FormSwitcher';
import DefaultLayout from '@/components/DefaultLayout';
import { $enum } from 'ts-enum-util';

interface ITestFormProps {}

console.log('FormType', Object.keys(FormType));
const typeOptions = $enum(FormType)
  .getKeys()
  .map((type) => ({ value: type, label: type }));
const initValue = typeOptions?.[0].value;

const TestForm: React.FunctionComponent<ITestFormProps> = (props) => {
  const [formType, setFormType] = useState<string>(initValue);
  const FormComp: FunctionComponent<any> | undefined = FormSelector(FormType[formType]);
  return (
    <DefaultLayout>
      <Select options={typeOptions} defaultValue={initValue} onChange={setFormType} style={{ width: 300 }} />
      {FormComp && <FormComp />}
    </DefaultLayout>
  );
};

export default TestForm;
