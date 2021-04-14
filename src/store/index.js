import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from '../reducer';
import middleware from '../middleware';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(middleware)),
);

export default store;
