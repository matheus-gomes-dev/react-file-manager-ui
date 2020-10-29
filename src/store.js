import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import UploadsReducer from 'reducers/uploads';

const rootReducer = combineReducers({
  UploadsReducer,
});

export default (extraArguments) => configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(extraArguments)]
});