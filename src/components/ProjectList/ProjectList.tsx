import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import palette from "../../style/palette";

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

const CategoryButton = styled.button`
  border: none;
  background-color: transparent;
`;

const CATEGORIES_OF_PROJECTS = ["전체", "프로젝트", "스터디"];

const tempProjects = Array(10).fill(1);

const ProjectList = () => {
  const navigate = useNavigate();

  const onClickProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <>
      <CategoryGroupDiv>
        {CATEGORIES_OF_PROJECTS.map((categoryOfProject) => (
          <CategoryButton key={categoryOfProject}>
            {categoryOfProject}
          </CategoryButton>
        ))}
      </CategoryGroupDiv>
      <ProjectListDiv>
        {tempProjects.map((tempProject, index) => (
          <ProjectItemDiv
            key={index}
            onClick={() => onClickProject(tempProject)}
          ></ProjectItemDiv>
        ))}
      </ProjectListDiv>
    </>
  );
};

export default ProjectList;
