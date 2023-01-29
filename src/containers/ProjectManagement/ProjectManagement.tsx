import React, { FunctionComponent } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import LayoutWrapper from '@/components/LayoutWrappwer';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProjectManagementProps {}

const ProjectManagement: FunctionComponent<IProjectManagementProps> = (props) => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <LayoutWrapper>
        <Result
          status="403"
          title="403"
          subTitle="아직 준비중인 페이지 입니다."
          extra={
            <Button type="primary" onClick={() => navigate('/')}>
              Back Home
            </Button>
          }
        />
      </LayoutWrapper>
    </DefaultLayout>
  );
};

export default ProjectManagement;
