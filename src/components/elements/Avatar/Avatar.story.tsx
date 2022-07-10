/* eslint-disable no-console */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Avatar from './index';

const componentMeta: ComponentMeta<typeof Avatar> = {
  title: 'atoms/Avatar',
  component: Avatar,
};

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const Default = Template.bind({});
Default.args = {
  size: 300,
  photoURL: null,
};

export default componentMeta;
export { Default };
