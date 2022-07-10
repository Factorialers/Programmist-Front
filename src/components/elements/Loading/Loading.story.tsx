import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Loading from './index';

const componentMeta: ComponentMeta<typeof Loading> = {
  title: 'atoms/Loading',
  component: Loading,
};

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

const Default = Template.bind({});
Default.args = {
  size: 300,
};

export default componentMeta;
export { Default };
