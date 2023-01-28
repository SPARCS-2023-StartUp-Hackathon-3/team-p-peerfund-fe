import React, { FunctionComponent, CSSProperties, useState } from 'react';
import styled from 'styled-components';
import Background from '@/style/background.png';
import FormSelector, { FormType } from '@/components/Forms/FormSwitcher';
import { ConfigProvider } from 'antd';
import palette from '@/style/palette';
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
  padding: 30px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 70%;
  }
`;

const LeftBoxDiv = styled.div`
  display: flex;
  background-color: rgba(207, 207, 207, 0.3);
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  color: #fff;
  padding: 30px;
`;
const RightBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  style?: CSSProperties;
}

const HomeH1 = styled.h1`
  font-weight: bold;
  font-size: 2.3rem;
  color: ${palette.white};
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const HomeH2 = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${palette.white};

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

const ColoredSpan = styled.span`
  color: ${palette.mint};
`;

const Home: FunctionComponent<ICardViewProps> = (props) => {
  const FormComp: FunctionComponent<any> | undefined = FormSelector(FormType['SPRINT_FORM']);

  return (
    <BackgroundDiv>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: palette.mint,
          },
        }}
      >
        <HomeBoxDiv>
          <LeftBoxDiv>
            <HomeH1>단기 프로젝트를 찾고 있나요?</HomeH1>
            {FormComp && <FormComp />}
          </LeftBoxDiv>
          <RightBoxDiv>
            <HomeH1>
              <ColoredSpan>3일</ColoredSpan> 안에 끝나는
              <br /> <ColoredSpan>스프린트 해커톤</ColoredSpan>과 함께하세요
            </HomeH1>

            <HomeH2>검증 가능한 팀원들과 함께하는 사이드 프로젝트</HomeH2>
          </RightBoxDiv>
        </HomeBoxDiv>
      </ConfigProvider>
    </BackgroundDiv>
  );
};

export default Home;
