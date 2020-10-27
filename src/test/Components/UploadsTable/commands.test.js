import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import uploadsCommands from 'commands/uploads';
import uploadsActions from 'actions/uploads';

describe('commands/uploads', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  let store, api;
  beforeEach(() => {
    api = {};
    const middlewares = [thunk.withExtraArgument({ api })];
    const mockStore = configureStore(middlewares);
    store = mockStore();
  });

  describe('loadUploads', () => {

    beforeEach(() => {
      api.getUploads = jest.fn(async () => Promise.resolve());
    });
    
    const run = (page = 1) => store.dispatch(uploadsCommands.loadUploads(page));

    it('should dispatch load started event', async () => {
      await run();
      expect(store.getActions()).toContainEqual(uploadsActions.loadUploadsStarted());
    });

    it('should dispatch load succeeded event with api response', async () => {
      api.getUploads = jest.fn(async () => Promise.resolve({
        data: {
          rows: [{ id: 'fake-id-0' }],
          count: 5
        }
      }));
      await run();
      expect(store.getActions()).toContainEqual(uploadsActions.loadUploadsSucceeded([{ id: 'fake-id-0' }], 1, 5));
    });

    it('should dispatch load succeeded event with correct pagination', async () => {
      api.getUploads = jest.fn(async () => Promise.resolve({
        data: {
          rows: [{ id: 'fake-id-0' }],
          count: 15
        }
      }));
      await run(2);
      expect(store.getActions()).toContainEqual(uploadsActions.loadUploadsSucceeded([{ id: 'fake-id-0' }], 2, 15));
    });

    it('should dispatch load failed event if api request fails', async () => {
      api.getUploads = jest.fn(async () => Promise.reject());
      await run();
      expect(store.getActions()).toContainEqual(uploadsActions.loadUploadsFailed());
    });

  });

});