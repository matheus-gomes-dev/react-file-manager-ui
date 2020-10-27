
export default {
  loadUploadsStarted: () => ({ type: 'UPLOADS_LOAD_STARTED' }),
  loadUploadsSucceeded: (data, page, count) =>
    ({ type: 'UPLOADS_LOAD_SUCCEEDED', payload: { data, page, count }}),
  loadUploadsFailed: () => ({ type: 'UPLOADS_LOAD_FAILED' }),
};