import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { Layout, Breadcrumb } from 'antd';

import { useLocation } from 'react-router-dom';

const { Content } = Layout;

interface IDefaultLayoutProps {}

const defaultStyle = {
  // height: "100%",
  width: '798px',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = (props) => {
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    console.log('pathname', location.pathname);
  }, [location]);

  const pathDom = useMemo(() => {
    const { pathname } = location;
    const pathArray = pathname.split('/');
    const emptyToSpace = (text: string) => (text === '' ? ' ' : text);
    return pathArray.map((path) => <Breadcrumb.Item key={path}>{emptyToSpace(path)}</Breadcrumb.Item>);
  }, [location]);

  return (
    <Layout style={defaultStyle}>
      <Layout style={{ padding: '0 24px 24px', overflow: 'auto' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>{pathDom}</Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
