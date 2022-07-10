import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { User } from 'firebase/auth';
import React, { FC, ComponentProps } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import authState from '../../libs/recoil/authState';
import Layout from './index';

const MockedComponent: FC<ComponentProps<typeof Layout>> = (props) => {
  const user: User = {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: '',
    uid: '',
    emailVerified: false,
    isAnonymous: false,
    metadata: {},
    providerData: [],
    refreshToken: '',
    tenantId: null,
    delete: async () => {},
    getIdToken: async () => '',
    getIdTokenResult: async () => ({
      authTime: '',
      expirationTime: '',
      issuedAtTime: '',
      signInProvider: null,
      signInSecondFactor: null,
      token: '',
      claims: {},
    }),
    reload: async () => {},
    toJSON: async () => ({}),
  };

  const setState = useSetRecoilState(authState);
  setState(user);

  return <Layout {...props} />;
};

const componentMeta: ComponentMeta<typeof MockedComponent> = {
  title: 'molecules/Layout',
  component: MockedComponent,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
};

const Template: ComponentStory<typeof MockedComponent> = (args) => <MockedComponent {...args} />;

const Default = Template.bind({});

export default componentMeta;
export { Default };
