import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '@/style/palette';
import { Space, Tag, Spin, Segmented } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import Project from '@/components/Project';
import FlexCenter from '@/components/FlexCenter';
const { CheckableTag } = Tag;

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

const ColoredH1 = styled.h1`
  font-size: 30px;
  font-weight: bolder;
  & > .color {
    color: ${palette.primary};
  }
`;

interface IProjectListProps {}

const tagsData = ['기획자', '디자이너', '프론트엔드', '백엔드', '기타'];
const orderList = ['전체', '최신순', '인기순'];

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
    title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
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

  return (
    <div style={{ paddingTop: 50 }}>
      <div>3일 동안 진행되는</div>
      <ColoredH1>
        <span className="color">{projects.length}개</span>의 스프린트 프로젝트가 매칭되었어요.
      </ColoredH1>
      <div style={{ display: 'table-caption', paddingTop: 30 }}>
        <Space size={[0, 8]}>
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

        <div style={{ paddingTop: 10 }}>
          <Segmented options={orderList} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={projects.length}
        next={fetchData}
        hasMore={true}
        loader={
          <FlexCenter>
            <Spin />
          </FlexCenter>
        }
      >
        <ProjectListDiv>
          {projects.map((item, index) => {
            const { title, author, date } = item;
            return <Project key={index} id={index} title={title} date={date} author={author} />;
          })}
        </ProjectListDiv>
      </InfiniteScroll>
    </div>
  );
};

export default ProjectList;
