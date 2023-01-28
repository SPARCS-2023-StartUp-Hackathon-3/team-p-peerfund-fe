import React from 'react';
import styled from 'styled-components';
import palette from '@/style/palette';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: palette.secondary,
};

const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Banner;
