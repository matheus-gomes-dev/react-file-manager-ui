import React from 'react';

import Table from './index';


export default {
  title: 'Example/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,

};