import ProjectForm from '@/components/Forms/ProjectFrom';
import React, { FunctionComponent } from 'react';

interface IProjectFormProps {}

const ProjectTestForm: FunctionComponent<IProjectFormProps> = (props) => {
  return (
    <div>
      <ProjectForm />
    </div>
  );
};

export default ProjectTestForm;
