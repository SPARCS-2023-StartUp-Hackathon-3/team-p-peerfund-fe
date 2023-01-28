import React, { FunctionComponent, CSSProperties } from 'react';
import styled from 'styled-components';
import DefaultLayout from '@/components/DefaultLayout';
import Banner from '@/components/Banner';
import ProjectList from '@/components/ProjectList';
import Background from '@/style/background.png';

interface ICardViewProps {}

const BackgroundDiv = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const HomeBoxDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  height: 80%;
`;

const LeftBoxDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(207, 207, 207, 0.3);
  border-radius: 50px;
`;
const RightBoxDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 50px;
`;

interface Props {
  style?: CSSProperties;
}

const Home: FunctionComponent<ICardViewProps> = (props) => {
  return (
    <BackgroundDiv>
      <HomeBoxDiv>
        <LeftBoxDiv></LeftBoxDiv>
        <RightBoxDiv></RightBoxDiv>
      </HomeBoxDiv>
    </BackgroundDiv>
  );
};

export default Home;
