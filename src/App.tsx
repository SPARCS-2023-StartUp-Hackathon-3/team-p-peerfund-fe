import React, { FunctionComponent } from 'react';
import { IntlProvider } from 'react-intl';
import CommonRouter from './CommonRouter';
import { BrowserRouter as Router } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import langState, { messages } from '@/state/lang';
import NavBar from './components/NavBar';
import GlobalStyle from './style/GlobalStyle';

const App: FunctionComponent<any> = () => {
  const lang = useRecoilValue(langState);

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <GlobalStyle />
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'conter', height: '100%' }}>
          <NavBar />
          <CommonRouter />
        </div>
      </Router>
    </IntlProvider>
  );
};

export default App;
