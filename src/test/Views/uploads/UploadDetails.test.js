import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import api from '../../../utils/api';
import UploadDetails from '../../../Views/uploads/UploadDetails';

configure({ adapter: new Adapter() });

describe('UploadDetails component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <UploadDetails />
      </Router>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should call api to fetch upload details', () => {
    const wrapper = shallow(
      <UploadDetails match={{ params: { id: 1 }}} />
    );
    jest.spyOn(api, 'getUploadById');
    const didMount = wrapper.instance().componentDidMount();
    didMount.then(() => {
      expect(api.getUploadById).toHaveBeenCalledWith(1);
    });
  });

  it('should update states with upload details after fetching api', () => {
    const wrapper = shallow(
      <UploadDetails match={{ params: { id: 1 }}} />
    );
    jest.spyOn(api, 'getUploadById').mockImplementation(() => ({
      data: {
        uploaded_data: [{ id: 'fake-id'}],
        name: 'fake-name',
        createdAt: 'fake-date'
      }
    }));
    const didMount = wrapper.instance().componentDidMount();
    didMount.then(() => {
      expect(wrapper.state().uploaded_data).toEqual([{ id: 'fake-id'}]);
      expect(wrapper.state().name).toEqual('fake-name');
      expect(wrapper.state().created_at).toEqual('fake-date');
    });
  });

});
