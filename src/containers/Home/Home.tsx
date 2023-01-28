import React, { FunctionComponent, CSSProperties, useState } from 'react';
import styled from 'styled-components';
import Background from '@/style/background.png';
import FormSelector, { FormType } from '@/components/Forms/FormSwitcher';

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
  display: flex;
  background-color: rgba(207, 207, 207, 0.3);
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
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
  const FormComp: FunctionComponent<any> | undefined = FormSelector(FormType['SPRINT_FORM']);

  return (
    <BackgroundDiv>
      <HomeBoxDiv>
        <LeftBoxDiv>{FormComp && <FormComp />}</LeftBoxDiv>
        <RightBoxDiv></RightBoxDiv>
      </HomeBoxDiv>
    </BackgroundDiv>
  );
};

export default Home;
