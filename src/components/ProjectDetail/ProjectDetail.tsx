import React, { FunctionComponent, useEffect, useState } from 'react';
import DefaultLayout from '@/components/DefaultLayout';

import { Input, Button, Descriptions, Row, Col, Avatar, Modal, App } from 'antd';
import {
  CommentUl,
  Commentli,
  DarkH1,
  ProfileImg,
  ProjectDescription,
  ProjectInfoDiv,
  ProfileCard,
} from './ProjectDetailStyles';
import FlexCenter from '@/components/FlexCenter';
import { tempData, tempComments, tempTeams } from './mock';
import { generateIndexImage } from '@/utils';
import ToolIcon from '@/components/ToolIcon';
import palette from '@/style/palette';
import ApplyForm from '@/components/Forms/ApplyForm';

const { dark, lightgrey } = palette;
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
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
    // navigate(`/apply/${projectId}`);
    setModalOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <DefaultLayout>
      <ProjectInfoDiv>
        <div style={{ gap: '30px', display: 'flex', flexDirection: 'column' }}>
          <DarkH1>{tempData.title}</DarkH1>
          <FlexCenter style={{ justifyContent: 'start' }}>
            <Avatar src={tempData.author_image} />
            <span style={{ marginLeft: 10 }}>{tempData.author}</span>
            <span style={{ marginLeft: 20 }}>{tempData.date}</span>
          </FlexCenter>
        </div>
        <Button
          type="primary"
          size="large"
          style={{ borderRadius: 20, paddingLeft: 30, paddingRight: 30 }}
          onClick={onClickApplyBtn}
        >
          ????????????
        </Button>
        <Modal
          open={modalOpen}
          title={tempData.title}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              ????????????
            </Button>,
          ]}
        >
          <FlexCenter style={{ flexDirection: 'column', width: '100%' }}>
            {tempTeams
              .filter((v, i) => i == 0)
              .map(({ image, name }, i) => (
                <ProfileCard
                  key={i}
                  style={{ border: 'none', backgroundColor: lightgrey, padding: '10px 30px', width: 'auto' }}
                >
                  <Avatar src={image} />
                  <div>
                    <span className="name">{name}</span>
                  </div>
                  <Button type={'primary'} style={{ borderRadius: 20, marginLeft: 30 }}>
                    ????????? ??????
                  </Button>
                </ProfileCard>
              ))}
            <div style={{ width: '100%' }}>
              <ApplyForm />
            </div>
          </FlexCenter>
        </Modal>
      </ProjectInfoDiv>
      <Row>
        <Col {...imageColumns}>
          <div
            style={{
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
            <ProjectDescription style={{ width: '100%' }}>
              <Descriptions column={1} bordered>
                <Descriptions.Item label="?????? ??????">{`${tempData.start_date} ~ ${tempData.end_date}`}</Descriptions.Item>
                <Descriptions.Item label="????????????">??????</Descriptions.Item>
                <Descriptions.Item label="Deposit">
                  <b>1</b> ??????
                </Descriptions.Item>
                <Descriptions.Item label="?????? ?????? 1">
                  <div>
                    <div>????????????, 2???</div>
                    <FlexCenter style={{ justifyContent: 'start' }}>
                      <ToolIcon tool="figma" />
                      <ToolIcon tool="xd" type="plain" style={{ marginLeft: 5 }} />
                    </FlexCenter>
                  </div>
                </Descriptions.Item>
                <Descriptions.Item label="?????? ?????? 2">
                  <div>
                    <div>????????? ?????????, 1???</div>
                    <FlexCenter style={{ justifyContent: 'start' }}>
                      <ToolIcon tool="typescript" />
                      <ToolIcon tool="docker" type="plain" style={{ marginLeft: 5 }} />
                      <ToolIcon tool="spring" style={{ marginLeft: 5 }} />
                    </FlexCenter>
                  </div>
                </Descriptions.Item>
              </Descriptions>
            </ProjectDescription>
          </FlexCenter>
        </Col>
      </Row>
      <FlexCenter></FlexCenter>

      <ProjectInfoDiv>
        <DarkH1>?????? ?????? ??????</DarkH1>
      </ProjectInfoDiv>
      <div style={{ marginBottom: '30px', wordBreak: 'keep-all', padding: 5 }}>
        {tempData.content.split('\n').map((line, i) => {
          return (
            <span key={i}>
              {line}
              <br />
            </span>
          );
        })}
      </div>

      <ProjectInfoDiv>
        <DarkH1>????????? ?????????</DarkH1>
      </ProjectInfoDiv>
      <FlexCenter style={{ marginBottom: '80px', justifyContent: 'start', padding: 5 }}>
        {tempTeams.map(({ image, position, name }, i) => (
          <ProfileCard key={i}>
            <Avatar src={image} />
            <div>
              <span className="position">{position}</span>
              <span className="name">{name}</span>
            </div>
          </ProfileCard>
        ))}
      </FlexCenter>

      <DarkH1>{tempComments.length}?????? ????????? ????????????.</DarkH1>
      <FlexCenter style={{ flexDirection: 'column', marginTop: 5 }}>
        <TextArea
          rows={4}
          placeholder="????????? ???????????????."
          size="large"
          name="comment"
          value={commentData.comment}
          onChange={onChangeComment}
        />

        <Button type="primary" size="large" style={{ marginTop: 10, marginLeft: 'auto', backgroundColor: dark }}>
          ????????????
        </Button>
      </FlexCenter>
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
