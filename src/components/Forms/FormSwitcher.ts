import { FunctionComponent } from 'react';
import ProjectForm from './ProjectForm';
import FundingForm from './FundingForm';
import ItemForm from './ItemForm';
import PeerForm from './PeerForm';
import SprintForm from './SprintForm';
import ApplyForm from './ApplyForm';

export enum FormType {
  PEER_FORM,
  PROJECT_FORM,
  FUNDING_FORM,
  ITEM_FORM,
  SPRINT_FORM,
  APPLY_FORM,
}

const FormSelector: (formType: FormType) => FunctionComponent<any> | undefined = (formType) => {
  switch (formType) {
    case FormType.PEER_FORM:
      return PeerForm;
    case FormType.PROJECT_FORM:
      return ProjectForm;
    case FormType.FUNDING_FORM:
      return FundingForm;
    case FormType.ITEM_FORM:
      return ItemForm;
    case FormType.SPRINT_FORM:
      return SprintForm;
    case FormType.APPLY_FORM:
      return ApplyForm;
  }
};

export default FormSelector;
