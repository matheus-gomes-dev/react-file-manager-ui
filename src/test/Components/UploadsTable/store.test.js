import createStore from 'store';
import actions from 'actions/uploads';

describe('UploadsTable store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore(api);
  });

  describe('isloading', () => {

    it('should be false by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be true when loading starts', () => {
      store.dispatch(actions.loadUploadsStarted());
      const state = store.getState().UploadsReducer;
      expect(state.isLoading).toBe(true);
    });

    it('should be false when loading succeeds', () => {
      store.dispatch(actions.loadUploadsStarted());
      store.dispatch(actions.loadUploadsSucceeded());
      const state = store.getState().UploadsReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be false when loading fails', () => {
      store.dispatch(actions.loadUploadsStarted());
      store.dispatch(actions.loadUploadsFailed());
      const state = store.getState().UploadsReducer;
      expect(state.isLoading).toBe(false);
    });

  });

  describe('uploads', () => {

    it('should be empty by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.uploads).toEqual([]);
    });

    it('should be updated with api response', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 1, 1));
      const state = store.getState().UploadsReducer;
      expect(state.uploads).toEqual([{ id: 'fake-upload-id '}]);
    });

  });

  describe('page', () => {

    it('should be on first page by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.page).toEqual(1);
    });

    it('should be updated with api response', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 2, 1));
      const state = store.getState().UploadsReducer;
      expect(state.page).toEqual(2);
    });

  });

  describe('count', () => {

    it('should be 0 by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.count).toEqual(0);
    });

    it('should be updated with api response', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 1, 2));
      const state = store.getState().UploadsReducer;
      expect(state.count).toEqual(2);
    });

  });

  describe('hasPagination', () => {

    it('should be false by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.hasPagination).toEqual(false);
    });

    it('should be true if table has more than 10 records', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 1, 15));
      const state = store.getState().UploadsReducer;
      expect(state.hasPagination).toEqual(true);
    });

    it('should be false if table has less than 10 records', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 1, 9));
      const state = store.getState().UploadsReducer;
      expect(state.hasPagination).toEqual(false);
    });

  });

  describe('hasPrevious', () => {

    it('should be false by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.hasPrevious).toEqual(false);
    });

    it('should be true if current page > 1', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 2, 15));
      const state = store.getState().UploadsReducer;
      expect(state.hasPrevious).toEqual(true);
    });

    it('should be false if current page <= 1', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 1, 9));
      const state = store.getState().UploadsReducer;
      expect(state.hasPrevious).toEqual(false);
    });

  });

  describe('hasNext', () => {

    it('should be false by default', () => {
      const state = store.getState().UploadsReducer;
      expect(state.hasNext).toEqual(false);
    });

    it('should be true if (current page * 10) < total records', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 2, 21));
      const state = store.getState().UploadsReducer;
      expect(state.hasNext).toEqual(true);
    });

    it('should be false if (current page * 10) = total records', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 2, 20));
      const state = store.getState().UploadsReducer;
      expect(state.hasNext).toEqual(false);
    });

    it('should be false if (current page * 10) > total records', () => {
      store.dispatch(actions.loadUploadsSucceeded([{ id: 'fake-upload-id '}], 2, 17));
      const state = store.getState().UploadsReducer;
      expect(state.hasNext).toEqual(false);
    });

  });

});