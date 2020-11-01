import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Table from './index';


export default {
  title: 'Example/Table',
  component: Table,
  decorators: [
    getStory => <MemoryRouter>{getStory()}</MemoryRouter>,
  ]
};

const Template = (args) => <Table {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,

};