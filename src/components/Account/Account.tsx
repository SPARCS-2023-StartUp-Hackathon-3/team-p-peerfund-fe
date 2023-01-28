import React, { FunctionComponent, useCallback, useMemo, useEffect } from 'react';
import { Badge, Card, Spin, Avatar } from 'antd';
import FlexCenter from '@/components/FlexCenter';
import SignIn from '@/components/SignIn';
import { useRecoilState, useRecoilValue } from 'recoil';
import { token as tokenState, account as accountState } from '@/state';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import isEmpty from '@/utils/isEmpty';

interface IAccountProps {}

const Account: FunctionComponent<IAccountProps> = (props) => {
  const [token, setToken] = useRecoilState(tokenState);
  const account = useRecoilValue(accountState);

  useEffect(() => {
    console.log('account', account);
  }, [account]);

  const logout = useCallback(() => {
    localStorage.removeItem('jwt');
    setToken('');
    location.href = '/';
  }, [setToken]);

  const assignRenderer = useMemo(() => {
    console.log('account', account);
    if (isEmpty(token)) {
      return <SignIn />;
    } else if (isEmpty(account)) {
      return <Spin size={'small'} />;
    } else {
      const { id, name, roleType, userName } = account;
      return (
        <Badge.Ribbon text={roleType}>
          <Card
            title={
              <FlexCenter>
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: 5 }}>{userName}</span>
              </FlexCenter>
            }
            headStyle={{ paddingRight: '100px' }}
            actions={[<LogoutOutlined key="logout" onClick={logout} />]}
            size="small"
          >
            {`이름 : ${name}`}
          </Card>
        </Badge.Ribbon>
      );
    }
  }, [account, logout, token]);

  return <FlexCenter style={{ flexFlow: 'column' }}>{assignRenderer}</FlexCenter>;
};

export default Account;
