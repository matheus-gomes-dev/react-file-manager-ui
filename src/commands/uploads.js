import { get } from 'lodash';

import actions from 'actions/uploads';


const loadUploads = (page = 1) => async (dispatch, getstate, { api }) => {
  try {
    dispatch(actions.loadUploadsStarted());
    const response = await api.getUploads(page);
    const data = get(response, 'data.rows', []);
    const count = get(response, 'data.count', 0);
    dispatch(actions.loadUploadsSucceeded(data, page, count));
  } catch {
    window.alert('Failed to load uploads');
    dispatch(actions.loadUploadsFailed());
  }
}

export default {
  loadUploads
};