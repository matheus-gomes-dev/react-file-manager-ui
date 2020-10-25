import { get } from 'lodash';
import api from 'utils/api';

const loadUploadsStarted = () => ({ type: 'UPLOADS_LOAD_STARTED' });
const loadUploadsSucceeded = (data, page, count) => ({ type: 'UPLOADS_LOAD_SUCCEEDED', payload: { data, page, count }});
const loadUploadsFailed = () => ({ type: 'UPLOADS_LOAD_FAILED' });
const loadUploads = (page = 1) => async (dispatch) => {
  try {
    dispatch(loadUploadsStarted());
    const response = await api.getUploads(page);
    const data = get(response, 'data.rows', []);
    const count = get(response, 'data.count', 0);
    dispatch(loadUploadsSucceeded(data, page, count));
  } catch {
    window.alert('Failed to load uploads');
    dispatch(loadUploadsFailed());
  }
}

export default {
  loadUploadsStarted,
  loadUploadsSucceeded,
  loadUploadsFailed,
  loadUploads
};