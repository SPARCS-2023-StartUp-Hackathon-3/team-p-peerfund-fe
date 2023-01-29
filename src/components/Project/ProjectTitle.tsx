import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  white-space: normal;
  height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default Title;
