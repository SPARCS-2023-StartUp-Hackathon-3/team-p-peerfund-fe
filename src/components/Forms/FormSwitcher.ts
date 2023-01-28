import { FunctionComponent } from 'react';
import ProjectForm from './ProjectForm';
import FundingForm from './FundingForm';

export enum FormType {
  PROJECT_FORM,
  FUNDING_FORM,
}

const FormSelector: (formType: FormType) => FunctionComponent<any> | undefined = (formType) => {
  switch (formType) {
    case FormType.PROJECT_FORM:
      return ProjectForm;
    case FormType.FUNDING_FORM:
      return FundingForm;
  }
};

export default FormSelector;
