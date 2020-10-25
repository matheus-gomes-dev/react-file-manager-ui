const INITIAL_STATE = {
  isLoading: false,
  uploads: [],
  page: 1,
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOADS_LOAD_STARTED':
      return { ...state, isLoading: true };
    case 'UPLOADS_LOAD_SUCCEEDED':
      const { data: uploads, page, count } = action.payload;
      return { ...state, isLoading: false, uploads, page, count };
    case 'UPLOADS_LOAD_FAILED':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};