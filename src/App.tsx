import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/index';

import Header from './components/Header';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </Provider>
);

export default App;
