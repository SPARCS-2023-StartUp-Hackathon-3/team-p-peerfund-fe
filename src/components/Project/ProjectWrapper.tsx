import styled from 'styled-components';

const ProjectWrapper = styled.div`
  border-radius: 16px;

  -webkit-box-shadow: 0px 2px 35px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 35px -2px rgba(0, 0, 0, 0.2);

  & .ant-card-body {
    padding: 16px 20px;
  }

  & .ant-card-meta {
    padding-top: 10px;
    & > .ant-card-meta-detail {
      & > .ant-card-meta-description {
        display: flex;
        justify-content: end;
        height: 100%;
        align-items: center;
      }
    }
  }
`;

export default ProjectWrapper;
