import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import AuthModal from './index';

const componentMeta: ComponentMeta<typeof AuthModal> = {
  title: 'molecules/AuthModal',
  component: AuthModal,
};

const Template: ComponentStory<typeof AuthModal> = (args) => <AuthModal {...args} />;

const Default = Template.bind({});

export default componentMeta;
export { Default };
