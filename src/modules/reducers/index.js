import { combineReducers } from 'redux';
import counterReducer from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Other reducers
});

export default rootReducer;
