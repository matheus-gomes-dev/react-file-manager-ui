import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import Dropzone from 'react-dropzone';

import api from '../../utils/api';
import UploadForm from '../../Components/UploadForm';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UploadForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('submit button should be disabled by default', () => {
    const wrapper = mount(<UploadForm />);
    const button = wrapper.find('button');
    expect(button.props()['disabled']).toBe(true);
  });

  it('should update form state when fileName input field changes', () => {
    const wrapper = mount(<UploadForm />);
    const fileNameInput = wrapper.find('input').at(0);
    fileNameInput.simulate('change', { target: { value: 'fake-value' } });
    expect(wrapper.state().fileName).toEqual('fake-value');
  });

  it('should update form state when file input field changes', () => {
    const wrapper = shallow(<UploadForm />);
    const fileInput = wrapper.find(Dropzone);
    fileInput.simulate('drop', [{ name: 'fake-file-name' }]);
    expect(wrapper.state().file).toBeTruthy();
  });

  it('submit button should not be disabled when form is completed', () => {
    const wrapper = shallow(<UploadForm />);

    const fileNameInput = wrapper.find('input').at(0);
    fileNameInput.simulate('change', { target: { value: 'fake-value' }, persist: jest.fn() });

    const fileInput = wrapper.find(Dropzone);
    fileInput.simulate('drop', [{ name: 'fake-file-name' }]);

    const button = wrapper.find('button');
    expect(button.props()['disabled']).toBe(false);
  });

  it('should call api when form fields when submitted', () => {
    const wrapper = shallow(<UploadForm onTableRefresh={jest.fn()} />);

    const fileNameInput = wrapper.find('input').at(0);
    fileNameInput.simulate('change', { target: { value: 'fake-value' }, persist: jest.fn() });

    const fileInput = wrapper.find(Dropzone);
    fileInput.simulate('drop', [{ file: 'fake-file', name: 'fake-file-name' }]);

    jest.spyOn(api, 'uploadFile');
    jest.spyOn(api, 'getUploads');
    const submit = wrapper.instance().submitForm();
    submit.then(() => {
      expect(api.uploadFile).toHaveBeenCalledWith('fake-value', [{ file: 'fake-file', name: 'fake-file-name' }]);
    })
  });

});
