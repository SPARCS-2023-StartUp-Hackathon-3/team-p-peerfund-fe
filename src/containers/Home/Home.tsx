import React, { FunctionComponent, CSSProperties } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import Banner from '@/components/Banner';
import ProjectList from '@/components/ProjectList';

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const Home: FunctionComponent<ICardViewProps> = (props) => {
  const jobTypes = ['기획자', '디자이너', '프론트엔드', '백엔드', '기타'];
  const projectTypes = ['전체', '프로젝트', '스터디'];
  const fundingStatus = ['전체', '펀딩 진행중', '공개예정'];

  return (
    <DefaultLayout>
      <Banner />
      <ProjectList title={'주목 할 만한 모집 공고'} firstCategories={jobTypes} secondCategories={projectTypes} />
    </DefaultLayout>
  );
};

export default Home;
