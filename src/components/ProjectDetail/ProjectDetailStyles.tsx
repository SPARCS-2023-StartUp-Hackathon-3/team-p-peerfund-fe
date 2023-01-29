import palette from '@/style/palette';
import styled from 'styled-components';

const { dark } = palette;

export const DarkH1 = styled.span`
  font-size: 30px;
  font-weight: bolder;
`;

export const ProjectInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 0;
  border-bottom: 0.02rem solid ${dark};
  margin: 15px 0;
`;

export const ProjectDescription = styled.div`
  & .ant-descriptions-view {
    & .ant-descriptions-item-label {
      font-weight: bold;
    }
  }
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

export const ProfileCard = styled.div`
  border: 1px solid ${dark};
  border-radius: 16px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  -o-flex-direction: row;
  flex-direction: row;
  padding: 5px 16px;
  margin-left: 8px;
  margin-right: 8px;

  & > div {
    padding: 5px;
    padding-left: 12px;
    & > .position {
      display: block;
      font-size: 14px;
      padding-bottom: 6px;
    }

    & > .name {
      display: block;
      font-weight: bolder;
    }
  }
`;
