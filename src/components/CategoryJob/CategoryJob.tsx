import React, { FunctionComponent } from "react";
import styled from "styled-components";

const CategoryGroupDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryButton = styled.button``;

const CATEGORIES_OF_JOB = [
  "기획자",
  "디자이너",
  "프론트엔드",
  "백엔드",
  "기타",
];

const CategoryJob = () => {
  return (
    <>
      <h1>주목할 만한 구인 모집</h1>
      <CategoryGroupDiv>
        {CATEGORIES_OF_JOB.map((category) => (
          <CategoryButton key={category}>{category}</CategoryButton>
        ))}
      </CategoryGroupDiv>
    </>
  );
};

export default CategoryJob;
