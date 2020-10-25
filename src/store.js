import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import UploadsReducer from 'reducers/uploads';

const rootReducer = combineReducers({
  UploadsReducer,
});

export default configureStore({
  reducer: rootReducer
});