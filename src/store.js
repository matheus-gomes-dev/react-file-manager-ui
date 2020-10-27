import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import api from 'utils/api';
import UploadsReducer from 'reducers/uploads';

const rootReducer = combineReducers({
  UploadsReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument({ api })]
});