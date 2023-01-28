import React, { FunctionComponent, useEffect, useState } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { CommentUl, Commentli, DarkH1, InfoGridDiv, ProfileImg, ProjectInfoDiv } from './ProjectDetailStyles';
import FlexCenter from '@/components/FlexCenter';
import { tempData, tempComments } from './mock';
import { generateIndexImage } from '@/utils';
const { TextArea } = Input;

interface IProjectDetailProps {
  projectId: number;
}

const ProjectDetail: FunctionComponent<IProjectDetailProps> = (props) => {
  const { projectId } = props;
  const navigate = useNavigate();
  const [commentData, setCommentData] = useState({
    comment: '',
    projectId,
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
    navigate(`/apply/${projectId}`);
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
      <FlexCenter>
        <div
          style={{
            borderRadius: '16px',
            width: '800px',
            height: '400px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${generateIndexImage(Number(projectId))})`,
          }}
        />
        <InfoGridDiv style={{ flex: 'none' }}>
          <span>모집 구분</span>
          <span>{tempData.type}</span>
          <span>모집 인원</span>
          <span>{tempData.numOfPeople}</span>
          <span>사용 기술</span>
          <span>{tempData.skill}</span>
        </InfoGridDiv>
      </FlexCenter>

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

export default ProjectDetail;
