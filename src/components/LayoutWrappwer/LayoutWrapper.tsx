import styled from 'styled-components';
const LayoutWrapper = styled.div`
  max-width: 1200px;
  width: calc(100% - 30px);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default LayoutWrapper;
