import { selector } from 'recoil';
import { account, AxiosInstance } from '@/api';
import tokenState from '@/state/token';
import isEmpty from '@/utils/isEmpty';

const { getAccount } = account;

const accountState = selector<any>({
  key: 'accountState',
  get: async ({ get }) => {
    const token = get(tokenState);
    console.log('accountState', token);
    if (!isEmpty(token)) {
      AxiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
      try {
        const { id, userName } = await getAccount();
        return {
          id,
          userName,
        };
      } catch (e) {
        console.error('getAccount error', e);
        localStorage.removeItem('jwt');
        window.location.href = '/';
      }
    }
    return {};
  },
});

export default accountState;
