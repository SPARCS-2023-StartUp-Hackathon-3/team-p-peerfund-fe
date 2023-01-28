import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '@/style/palette';
import { Card, Space, Tag, Avatar, Tabs } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import DefaultImg from '@/style/background.png';

import type { TabsProps } from 'antd';
import Project from '@/components/Project';
const { CheckableTag } = Tag;

const { Meta } = Card;

const ProjectListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-projects: center;
  column-gap: 20px;
  row-gap: 30px;
  margin: 20px 0;
  padding: 15px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryGroupDiv = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const CategoryDiv = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  background-color: ${palette.dark};
  padding: 10px 18px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  color: ${palette.white};

  background-color: ${(props) => (props.isSelected ? palette.primary : palette.secondary)};

  &:hover {
    filter: brightness(90%);
  }
`;

const ProjectTypeDiv = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${palette.primary};
  }
`;

const ColoredH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${palette.primary};
`;

interface IProjectListProps {}

const tagsData = ['기획자', '디자이너', '프론트엔드', '백엔드', '기타'];

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `전체`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `최신순`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `인기순`,
    children: `Content of Tab Pane 3`,
  },
];

const ProjectList = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['기획자']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const navigate = useNavigate();

  const onClickProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const dummyData = Array(6).fill({
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'title',
    author: 'jiheon',
    date: '2023-01-28 ~ 02.03',
  });

  const [projects, setProjects] = useState(dummyData);
  const fetchData = () => {
    console.log(1);

    setTimeout(() => {
      setProjects(projects.concat(dummyData));
    }, 1000);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <ColoredH1>{projects.length}개의 스프린트 프로젝트가 매칭되었어요.</ColoredH1>

      <Space size={[0, 8]} wrap>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

      <InfiniteScroll dataLength={projects.length} next={fetchData} hasMore={true} loader={<h4>Loading...</h4>}>
        <ProjectListDiv>
          {projects.map((item, index) => {
            const { title, author, date } = item;
            return <Project key={index} id={index} title={title} date={date} author={author} />;
          })}
        </ProjectListDiv>
      </InfiniteScroll>
    </>
  );
};

export default ProjectList;
