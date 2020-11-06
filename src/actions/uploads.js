
export const Types = {
  loadUploadsStarted: 'UPLOADS_LOAD_STARTED',
  loadUploadsSucceeded: 'UPLOADS_LOAD_SUCCEEDED',
  loadUploadsFailed: 'UPLOADS_LOAD_FAILED',
};

const Actions = {
  loadUploadsStarted: () => ({ type: Types.loadUploadsStarted }),
  loadUploadsSucceeded: (data, page, count) =>
    ({ type: Types.loadUploadsSucceeded, payload: { data, page, count }}),
  loadUploadsFailed: () => ({ type: Types.loadUploadsFailed }),
}

export default Actions;
