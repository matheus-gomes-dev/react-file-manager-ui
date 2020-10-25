
const actions = {
  loadUploadsStarted: () => ({ type: 'UPLOADS_LOAD_STARTED' }),
  loadUploadsFinished: (data, page) => ({ type: 'UPLOADS_LOAD_FINISHED', payload: { data, page }}),
  loadUploadsFailed: () => ({ type: 'UPLOADS_LOAD_FAILED' })
}

export default actions;