import React, { FunctionComponent, CSSProperties } from 'react';
import ProjectList from '@/components/ProjectList';
import styled from 'styled-components';

interface ICardViewProps {}

interface Props {
  style?: CSSProperties;
}

const Container = styled.div`
  width: 75%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Peer: FunctionComponent<ICardViewProps> = (props) => {
  const jobTypes = ['기획자', '디자이너', '프론트엔드', '백엔드', '기타'];
  const projectTypes = ['전체', '프로젝트', '스터디'];
  const fundingStatus = ['전체', '펀딩 진행중', '공개예정'];

  return (
    <Container>
      <ProjectList />
    </Container>
  );
};

export default Peer;
