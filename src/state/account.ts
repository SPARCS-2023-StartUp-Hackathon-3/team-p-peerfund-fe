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
      console.log('accountState', 1);
      try {
        const account = await getAccount();
        console.log('accountState', 2);
        return account;
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
