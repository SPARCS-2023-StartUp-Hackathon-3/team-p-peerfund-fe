import { FunctionComponent } from 'react';
import ProjectForm from './ProjectFrom';

export enum FormType {
  PROJECT_FORM,
}

const FormSelector: (formType: FormType) => FunctionComponent<any> | undefined = (formType) => {
  switch (formType) {
    case FormType.PROJECT_FORM:
      return ProjectForm;
  }
};

export default FormSelector;
