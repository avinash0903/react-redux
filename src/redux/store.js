import { cretaeStore } from 'redux';
import { reducers } from './reducer/index';

const store = cretaeStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
