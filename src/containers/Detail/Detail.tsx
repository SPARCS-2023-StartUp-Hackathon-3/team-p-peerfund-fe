import LayoutWrapper from '@/components/LayoutWrappwer';
import ProjectDetail from '@/components/ProjectDetail';
import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

interface IDetailProps {}

const Detail: FunctionComponent<IDetailProps> = (props) => {
  const { projectId } = useParams();
  return (
    <LayoutWrapper>
      <ProjectDetail projectId={Number(projectId)} />;
    </LayoutWrapper>
  );
};

export default Detail;
