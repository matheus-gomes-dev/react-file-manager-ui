const INITIAL_STATE = {
  isLoading: false,
  uploads: [],
  page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOADS_LOAD_STARTED':
      return { ...state, isLoading: true };
    case 'UPLOADS_LOAD_FINISHED':
      const { data: uploads, page } = action.payload;
      return { ...state, isLoading: false, uploads, page };
    case 'UPLOADS_LOAD_FAILED':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};