import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Header from '../../Components/Header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the default title', () => {
    const wrapper = mount(<Header />);
    const spanElement = wrapper.find('span');
    expect(spanElement.text()).toEqual('React File Manager');
  });

  it('should render custom title if provided', () => {
    const wrapper = mount(<Header title="custom title" />);
    const spanElement = wrapper.find('span');
    expect(spanElement.text()).toEqual('custom title');
  });

});
