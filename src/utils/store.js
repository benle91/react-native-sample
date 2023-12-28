import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../modules/reducers';

const store = configureStore({
  reducer: rootReducer,
  // Other store configurations if needed
});

export default store;