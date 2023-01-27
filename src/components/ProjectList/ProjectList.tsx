import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '@/style/palette';

const ProjectListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  column-gap: 40px;
  row-gap: 48px;
  margin: 20px 0;
`;

const ProjectItemDiv = styled.div`
  width: 200px;
  height: 230px;
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
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;

  background-color: ${(props) => (props.isSelected ? palette.primary : palette.dark)};

  &:hover {
    filter: brightness(80%);
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

const tempProjects = Array(10).fill(1);

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

  useEffect(() => {
    console.log(isSelect);
  }, [isSelect]);

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
                  console.log(index);
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
      <ProjectListDiv>
        {tempProjects.map((tempProject, index) => (
          <ProjectItemDiv key={index} onClick={() => onClickProject(tempProject)}></ProjectItemDiv>
        ))}
      </ProjectListDiv>
    </>
  );
};

export default ProjectList;
