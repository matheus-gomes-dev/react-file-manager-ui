import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import App from '../App';
import api from 'utils/api';
import createStore from 'store';

configure({adapter: new Adapter()});

describe('App', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStore({ api })}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
