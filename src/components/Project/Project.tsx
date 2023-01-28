import { Avatar, Card } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateIndexImage from '@/utils/generateIndexImage';
import Heart from 'react-heart';
import palette from '@/style/palette';
import styled from 'styled-components';
import Title from './ProjectTitle';
import ProjectWrapper from './ProjectWrapper';
import FlexCenter from '../FlexCenter';

interface IProjectProps {
  id?: any;
  title: string;
  date: string;
  imageUrl?: string;
  author: string;
  authorImageUrl?: string;
}

const { primary } = palette;
const { Meta } = Card;

const Project: FunctionComponent<IProjectProps> = (props) => {
  const { id, title, date, imageUrl, author, authorImageUrl } = props;
  const navigate = useNavigate();

  const onClickProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const [like, setLike] = useState(false);

  return (
    <ProjectWrapper>
      <Card
        bordered={false}
        style={{ borderRadius: 16, cursor: 'pointer' }}
        hoverable
        cover={
          <div
            style={{
              borderRadius: '16px 16px 0px 0px',
              width: '100%',
              height: '300px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${imageUrl || generateIndexImage(id)})`,
            }}
          />
        }
        onClick={(e: any) => {
          e.view.preventDefault();
          e.view.stopPropagation();
          onClickProject(id);
          return false;
        }}
      >
        <Title>{title}</Title>
        <span>{date}</span>
        <Meta
          avatar={
            <div style={{ paddingTop: 5 }}>
              <Avatar src={authorImageUrl || generateIndexImage(id)} />
              <span style={{ marginLeft: 5 }}>{author}</span>
            </div>
          }
          description={
            <FlexCenter>
              <Heart
                style={{ width: 28 }}
                activeColor={primary}
                inactiveColor={primary}
                isActive={like}
                onClick={() => setLike(!like)}
              />
            </FlexCenter>
          }
        />
      </Card>
    </ProjectWrapper>
  );
};

export default Project;
