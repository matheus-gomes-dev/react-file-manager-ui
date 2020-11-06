import { Types } from 'actions/uploads';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  uploads: [],
  page: 1,
  count: 0,
  hasPagination: false,
  hasPrevious: false,
  hasNext: false
};

const reductionLookup = {
  [Types.loadUploadsStarted]: (state) => ({ ...state, isLoading: true }),
  [Types.loadUploadsSucceeded]: (state, payload) => {

    const { data: uploads, page, count } = payload;

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
  },
  [Types.loadUploadsFailed]: (state) => ({ ...state, isLoading: false })
}

export default genericReducer(initialState, reductionLookup);
