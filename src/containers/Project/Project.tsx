import React, { useState, useEffect, ChangeEvent } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import styled from 'styled-components';
import palette from '@/style/palette';
import { Input, Button, Modal } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
const { TextArea } = Input;

const DarkH1 = styled.h1`
  font-size: 29px;
  font-weight: bold;
`;

const ProjectInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0;
  border-bottom: 0.02rem solid ${palette.dark};
  margin: 30px 0;
`;

const ProfileImg = styled.div`
  border-radius: 100%;
  background-color: ${palette.dark};
  width: 34px;
  height: 34px;
`;

const InfoGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 10px;
  align-content: start;
  justify-content: start;
`;

const CommentUl = styled.ul`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Commentli = styled.li`
  display: flex;
  justify-content: space-between;
`;

const tempData = {
  author: 'jiheon788',
  date: '2023-01-01',
  title: '피펀 디자이너 모집합니다.',
  content:
    '이번 해커톤에서도 팀원을 구하기가 정말 힘들었는데 개발을 좋아하는 사람이라면 프로젝트를 진행할 때 반드시 누가 도와줬으면 하는 생각이 있었다. 그래서 기존 기술 스택을 서비스를 만들려고 조금씩 타 범위를 공부하기 시작했고 실제로 저는 서비스를 만드는데 포지션에 방해받고 싶지 않아서 안드로이드 개발자로서 시작했지만 도중에 포토샵 일러스트를 공부하고 프론트엔드 개발자로 전향한 이후, 서비스 개발의 전체적인 시야를 위해 지금은 백엔드 개발자로 전향했습니다 결국 혼자 프로젝트 진행을 할 때에 기술에 대한 장벽으로 막히는 것이 있으면 스스로 만들고 싶다고 장기간 공부해야 하는데 깊게 공부할 수 없게 만드는 요소라고 생각하고 이 부분을 해소하는 것은 결국 서로 합이 좋은 팀원을 찾는것이라고 생각합니다',
  numOfPeople: 5,
  type: '프로젝트',
  skill: 'Figma',
};

const tempComments = [
  {
    author: 'jiheon788',
    content: '이번 해커톤에서도 팀원을 구하기가 정말 힘들었는데',
  },
  {
    author: 'donho',
    content: '개발자로 전향한 이후, 서비스 개발의 전체',
  },
  {
    author: 'sparcs',
    content: '조금씩 타 범위를 공부하기 시작했',
  },
];

const Project = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentData, setCommentData] = useState({
    comment: '',
    projectId: params.projectId,
  });

  const onChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData({
      ...commentData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log(commentData);
  }, [commentData]);

  const onClickApplyBtn = () => {
    navigate(`/apply/${params.projectId}`);
  };

  return (
    <DefaultLayout>
      <ProjectInfoDiv>
        <div style={{ gap: '30px', display: 'flex', flexDirection: 'column' }}>
          <DarkH1>{tempData.title}</DarkH1>
          <div style={{ gap: '10px', display: 'flex', alignContent: 'center' }}>
            <ProfileImg />
            <span>{tempData.author}</span>
            <span>{tempData.date}</span>
          </div>
        </div>
        <Button type="primary" onClick={onClickApplyBtn}>
          지원하기
        </Button>
      </ProjectInfoDiv>
      <InfoGridDiv>
        <span>모집 구분</span>
        <span>{tempData.type}</span>
        <span>모집 인원</span>
        <span>{tempData.numOfPeople}</span>
        <span>사용 기술</span>
        <span>{tempData.skill}</span>
      </InfoGridDiv>

      <ProjectInfoDiv>
        <DarkH1>프로젝트 소개</DarkH1>
      </ProjectInfoDiv>
      <div style={{ marginBottom: '30px' }}>{tempData.content}</div>

      <DarkH1>{tempComments.length}개의 댓글이 있습니다.</DarkH1>
      <TextArea
        rows={3}
        placeholder="댓글을 달아주세요."
        size="large"
        name="comment"
        value={commentData.comment}
        onChange={onChangeComment}
      />

      <Button type="primary">등록하기</Button>
      <CommentUl>
        {tempComments.map((comment, index) => (
          <Commentli key={index}>
            <span>{comment.content}</span>
            <span>{comment.author}</span>
          </Commentli>
        ))}
      </CommentUl>
    </DefaultLayout>
  );
};

export default Project;
