import CommonForm from '@/components/CommonForm';
import React from 'react';

interface ITestFormProps {}

const TestForm: React.FunctionComponent<ITestFormProps> = (props) => {
  return (
    <div>
      <CommonForm />
    </div>
  );
};

export default TestForm;
