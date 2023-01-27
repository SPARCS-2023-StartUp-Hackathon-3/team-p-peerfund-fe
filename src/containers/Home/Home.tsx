import React, { FunctionComponent, CSSProperties } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import Banner from '@/components/Banner';
import ProjectList from '@/components/ProjectList';

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const Home: FunctionComponent<ICardViewProps> = (props) => {
  const firstCategories = ['기획자', '디자이너', '프론트엔드', '백엔드', '기타'];
  const secondCategories = ['전체', '프로젝트', '스터디'];

  return (
    <DefaultLayout>
      <Banner />
      <ProjectList
        title={'주목할 만한 구인 모집'}
        firstCategories={firstCategories}
        secondCategories={secondCategories}
      />
      <ProjectList title={'주목할 만한 크라우드 펀딩'} secondCategories={secondCategories} />
    </DefaultLayout>
  );
};

export default Home;
