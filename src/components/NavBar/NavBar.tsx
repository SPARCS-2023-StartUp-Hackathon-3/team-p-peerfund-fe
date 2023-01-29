/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
import { routerMeta } from '@/meta';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assignRouteArrayProps, isEmpty } from '@/utils';
import palette from '@/style/palette';
import Account from '@/components/Account';
import { useRecoilValue } from 'recoil';
import accountState from '@/state/account';
import MenuPopOver from '@/components/MenuPopOver';
import { UserOutlined } from '@ant-design/icons';
import logo from '@/style/logo.png';

const { primary, white, dark, shadowgrey } = palette;

interface INavBarProps {}

const menuStyle = {
  width: '100%',
  display: 'flex',
  backgroundColor: white,
  color: dark,
  borderBottom: 'unset',
};

const nextRouter = (prev: any[], next: any, componentKey: string) => {
  const { length, ...rest } = next;
  if (length === 1) {
    return [...prev, { componentKey, ...rest }];
  } else {
    return prev;
  }
};

const defaultMenus: any[] = Object.keys(routerMeta).reduce((prev: any[], componentKey: string) => {
  const propsArr: any = assignRouteArrayProps(routerMeta[componentKey]);
  const { hide, path, ...rest } = propsArr;

  const getPath = (path: string) => (path.match(/\//gi) || []).length;

  const pathWIthSlashLengthArr: any | any[] = Array.isArray(propsArr)
    ? propsArr.map(({ path }) => ({ path, ...rest, length: getPath(path) }))
    : { path, ...rest, length: getPath(path) };

  if (hide) {
    return prev;
  } else if (Array.isArray(pathWIthSlashLengthArr)) {
    const assignPathData = pathWIthSlashLengthArr.reduce(
      (prevArr, next) => nextRouter(prevArr, next, componentKey),
      [],
    );
    return [...prev, ...assignPathData];
  } else {
    return nextRouter(prev, pathWIthSlashLengthArr, componentKey);
  }
}, []);

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const navigate = useNavigate();
  const account = useRecoilValue(accountState);
  const location = useLocation();

  const savedAccount: any = useMemo(() => {
    if (isEmpty(account)) {
      return undefined;
    }
    return account;
  }, [account]);

  const assignMenus = useMemo(
    () =>
      defaultMenus.filter(({ account, path }) => {
        if (account) {
          return !!savedAccount;
        } else if (account === undefined) {
          return true;
        } else {
          return !savedAccount;
        }
      }),
    [savedAccount],
  );

  return (
    <Layout style={{ flex: 'none' }}>
      <Header
        className="header"
        style={{
          display: 'flex',
          backgroundColor: white,
          color: primary,
          borderBottom: `1px solid ${shadowgrey}`,
        }}
      >
        <div
          className="logo"
          style={{
            display: 'flex',
            width: 160,
            flex: 'none',
            cursor: 'pointer',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
          }}
          onClick={() => navigate('/')}
        />
        <Menu theme="light" mode="horizontal" style={menuStyle} activeKey={location.pathname} selectable={false}>
          {defaultMenus.map(({ componentKey, path, title }) => (
            <Menu.Item key={path}>
              <Link to={path}>{title || `${componentKey} (${path})`}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ opacity: 1, marginLeft: 'auto', order: assignMenus.length + 2 }}>
          <MenuPopOver
            buttonProps={
              {
                placement: 'bottomLeft',
                // title: 'Account',
                content: <Account />,
              } as any
            }
          >
            <UserOutlined />
          </MenuPopOver>
        </div>
      </Header>
    </Layout>
  );
};

export default NavBar;
