import React, { FunctionComponent, useEffect, useState } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Descriptions, Row, Col } from 'antd';
import { CommentUl, Commentli, DarkH1, InfoGridDiv, ProfileImg, ProjectInfoDiv } from './ProjectDetailStyles';
import FlexCenter from '@/components/FlexCenter';
import { tempData, tempComments } from './mock';
import { generateIndexImage } from '@/utils';
import ToolIcon from '../ToolIcon/ToolIcon';
const { TextArea } = Input;

interface IProjectDetailProps {
  projectId: number;
}

const imageColumns = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 16 },
  lg: { span: 16 },
  xl: { span: 12 },
  xxl: { span: 12 },
};

const descriptionColumns = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 8 },
  lg: { span: 8 },
  xl: { span: 12 },
  xxl: { span: 12 },
};

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
      <Row>
        <Col {...imageColumns}>
          <div
            style={{
              flex: 'none',
              borderRadius: '16px',
              maxWidth: '600px',
              width: '100%',
              height: '360px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${generateIndexImage(Number(projectId))})`,
            }}
          />
        </Col>
        <Col {...descriptionColumns}>
          <FlexCenter style={{ padding: 15, height: '100%' }}>
            <Descriptions column={1}>
              <Descriptions.Item label="진행 날짜">{`${tempData.start_date} ~ ${tempData.end_date}`}</Descriptions.Item>
              <Descriptions.Item label="아이디어">있음</Descriptions.Item>
              <Descriptions.Item label="Deposit">
                <b>1</b> 만원
              </Descriptions.Item>
              <Descriptions.Item label="구인 직무 1">
                <div>
                  <div>디자이너, 2명</div>
                  <FlexCenter>
                    <ToolIcon tool="figma" />
                    <ToolIcon tool="xd" type="plain" style={{ marginLeft: 5 }} />
                  </FlexCenter>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="구인 직무 2">
                <div>
                  <div>백엔드 개발자, 1명</div>
                  <FlexCenter>
                    <ToolIcon tool="typescript" />
                    <ToolIcon tool="docker" type="plain" style={{ marginLeft: 5 }} />
                    <ToolIcon tool="spring" style={{ marginLeft: 5 }} />
                  </FlexCenter>
                </div>
              </Descriptions.Item>
            </Descriptions>
          </FlexCenter>
        </Col>
      </Row>
      <FlexCenter></FlexCenter>

      <ProjectInfoDiv>
        <DarkH1>협의 필요 내용</DarkH1>
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
