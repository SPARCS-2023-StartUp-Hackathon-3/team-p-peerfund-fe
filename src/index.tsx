import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import theme from '@/style/theme';

import { RecoilRoot } from 'recoil';

import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <RecoilRoot>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
