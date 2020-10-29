const INITIAL_STATE = {
  isLoading: false,
  uploads: [],
  page: 1,
  count: 0,
  hasPagination: false,
  hasPrevious: false,
  hasNext: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOADS_LOAD_STARTED':
      return { ...state, isLoading: true };
    case 'UPLOADS_LOAD_SUCCEEDED':
      const { data: uploads, page, count } = action.payload;
      const perPage = 10;
      const hasPagination = count > perPage;
      const hasPrevious = page > 1;
      const hasNext = (page * perPage) < count;
      return {
        ...state,
        isLoading: false,
        uploads,
        page,
        count,
        hasPagination,
        hasPrevious,
        hasNext
      };
    case 'UPLOADS_LOAD_FAILED':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
