/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { FunctionComponent } from 'react';
import FlexCenter from '@/components/FlexCenter';
import palette from '@/style/palette';

interface IToolIconProps {
  tool: string;
  type?: string;
  style?: any;
}

const { mint } = palette;

const generateToolUrl = (toolName: string, type = 'original') => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${toolName}/${toolName}-${type}.svg`;
};

const ToolIcon: FunctionComponent<IToolIconProps> = ({ tool, style, type = 'original' }) => {
  return (
    <FlexCenter
      style={{
        // backgroundImage: `url(${generateToolUrl(tool)})`,
        width: 35,
        height: 35,
        border: `1px solid ${mint}`,
        borderRadius: 20,
        ...style,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${generateToolUrl(tool, type)})`,
          backgroundRepeat: 'no-repeat',
          width: 20,
          height: 20,
        }}
      />
    </FlexCenter>
  );
};

export default ToolIcon;
