/* eslint-disable no-console */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Toggle from './index';

const componentMeta: ComponentMeta<typeof Toggle> = {
  title: 'atoms/Toggle',
  component: Toggle,
};

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('clicked!'),
};

export default componentMeta;
export { Default };
