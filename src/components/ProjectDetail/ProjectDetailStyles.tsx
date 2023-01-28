import palette from '@/style/palette';
import styled from 'styled-components';

const { dark } = palette;

export const DarkH1 = styled.h1`
  font-size: 29px;
  font-weight: bold;
`;

export const ProjectInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0;
  border-bottom: 0.02rem solid ${dark};
  margin: 30px 0;
`;

export const ProfileImg = styled.div`
  border-radius: 100%;
  background-color: ${dark};
  width: 34px;
  height: 34px;
`;

export const InfoGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 10px;
  align-content: start;
  justify-content: start;
`;

export const CommentUl = styled.ul`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Commentli = styled.li`
  display: flex;
  justify-content: space-between;
`;
