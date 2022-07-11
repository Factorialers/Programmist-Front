import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Tag from './index';

const componentMeta: ComponentMeta<typeof Tag> = {
  title: 'atoms/Tag',
  component: Tag,
};

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

const Default = Template.bind({});
Default.args = {
  text: 'some tag',
};

export default componentMeta;
export { Default };
