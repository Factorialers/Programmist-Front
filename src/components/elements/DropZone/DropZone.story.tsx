/* eslint-disable no-console */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import DropZone from './index';

const componentMeta: ComponentMeta<typeof DropZone> = {
  title: 'atoms/DropZone',
  component: DropZone,
};

const Template: ComponentStory<typeof DropZone> = (args) => <DropZone {...args} />;

const Default = Template.bind({});
Default.args = {
  onDrop: () => console.log('droped!'),
};

export default componentMeta;
export { Default };
