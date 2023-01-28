import React, { FunctionComponent, CSSProperties } from 'react';
import ProjectList from '@/components/ProjectList';
import LayoutWrapper from '@/components/LayoutWrappwer';

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const Peer: FunctionComponent<ICardViewProps> = (props) => {
  const jobTypes = ['기획자', '디자이너', '프론트엔드', '백엔드', '기타'];
  const projectTypes = ['전체', '프로젝트', '스터디'];
  const fundingStatus = ['전체', '펀딩 진행중', '공개예정'];

  return (
    <LayoutWrapper>
      <ProjectList />
    </LayoutWrapper>
  );
};

export default Peer;
