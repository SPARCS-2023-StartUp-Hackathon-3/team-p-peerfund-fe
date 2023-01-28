import { Avatar, Card } from 'antd';
import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import generateIndexImage from '@/utils/generateIndexImage';

interface IProjectProps {
  id?: any;
  title: string;
  imageUrl?: string;
  author: string;
  authorImageUrl?: string;
}

const { Meta } = Card;

const Project: FunctionComponent<IProjectProps> = (props) => {
  const { id, title, imageUrl, author, authorImageUrl } = props;
  const navigate = useNavigate();

  const onClickProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
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
      onClick={() => onClickProject(id)}
    >
      <Meta
        avatar={<Avatar src={authorImageUrl || generateIndexImage(id)} />}
        title={author}
        description="description"
      />
    </Card>
  );
};

export default Project;
