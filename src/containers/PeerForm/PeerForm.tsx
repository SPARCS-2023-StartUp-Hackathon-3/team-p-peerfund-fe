import FormSelector, { FormType } from '@/components/Forms/FormSwitcher';
import LayoutWrapper from '@/components/LayoutWrappwer';
import React, { FunctionComponent } from 'react';

interface IPeerFormProps {}

const PeerForm: FunctionComponent<IPeerFormProps> = (props) => {
  const PeerFormComp = FormSelector(FormType.PEER_FORM);

  return <LayoutWrapper>{PeerFormComp && <PeerFormComp />}</LayoutWrapper>;
};

export default PeerForm;
