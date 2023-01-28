import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '@/style/palette';
import { Card, Layout, Row, Col, Grid, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Temp from '../Temp';

const { Meta } = Card;

const ProjectListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  column-gap: 20px;
  row-gap: 30px;
  margin: 20px 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItemDiv = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${palette.dark};
  border-radius: 20px;
  cursor: pointer;
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

interface IProjectListProps {
  title: string;
  firstCategories?: string[];
  secondCategories: string[];
}

const ProjectList = ({ title, firstCategories = [], secondCategories }: IProjectListProps) => {
  const [isSelect, setIsSelect] = useState<boolean[]>(Array(firstCategories.length).fill(false));
  const navigate = useNavigate();

  const onClickProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const onClickCategory = (index: number) => {
    let temp = [...isSelect];
    temp[index] = !temp[index];
    setIsSelect(temp);
  };

  const [items, setItems] = useState(Array.from({ length: 30 }));

  useEffect(() => {
    console.log(items);
  }, [items]);
  // https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png

  const fetchData = () => {
    console.log(1);
    setTimeout(() => {
      let temp = items;
      temp.concat(Array.from({ length: 40 }));
      setItems(temp);
    }, 500);
  };

  return (
    <>
      <ColoredH1>{title}</ColoredH1>

      <CategoryGroupDiv>
        {firstCategories ? (
          <>
            {firstCategories.map((category, index) => (
              <CategoryDiv
                key={category}
                isSelected={isSelect[index]}
                onClick={() => {
                  onClickCategory(index);
                }}
              >
                {category}
              </CategoryDiv>
            ))}
          </>
        ) : (
          <></>
        )}
      </CategoryGroupDiv>

      <CategoryGroupDiv>
        {secondCategories.map((categoryOfProject) => (
          <ProjectTypeDiv key={categoryOfProject}>{categoryOfProject}</ProjectTypeDiv>
        ))}
      </CategoryGroupDiv>

      <Temp />
    </>
  );
};

export default ProjectList;
