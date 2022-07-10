import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Footer from './index';

const componentMeta: ComponentMeta<typeof Footer> = {
  title: 'molecules/Footer',
  component: Footer,
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

const Default = Template.bind({});

export default componentMeta;
export { Default };
