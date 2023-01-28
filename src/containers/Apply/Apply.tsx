import React, { FunctionComponent, useState } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import FormSelector, { FormType } from '@/components/Forms/FormSwitcher';

const Apply = () => {
  const FormComp: FunctionComponent<any> | undefined = FormSelector(FormType['PEER_FORM']);

  return <DefaultLayout>{FormComp && <FormComp />}</DefaultLayout>;
};

export default Apply;
