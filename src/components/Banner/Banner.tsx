import React from "react";
import styled from "styled-components";
import palette from "../../style/palette";

const BannerDiv = styled.div`
  min-height: 350px;
  background-color: ${palette.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = () => {
  return <BannerDiv>Banner</BannerDiv>;
};

export default Banner;
