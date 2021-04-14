import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './containers/App/index';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
const target = document.getElementById('root');
render(rootReactElement, target);
