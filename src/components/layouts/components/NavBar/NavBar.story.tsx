import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { User } from 'firebase/auth';
import React, { FC, ComponentProps } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import authState from '../../../../libs/recoil/authState';
import NavBar from './index';

const MockedComponent: FC<ComponentProps<typeof NavBar>> = (props) => {
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

  return <NavBar {...props} />;
};

const componentMeta: ComponentMeta<typeof MockedComponent> = {
  title: 'molecules/NavBar',
  component: MockedComponent,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
};

const Template: ComponentStory<typeof NavBar> = (args) => <MockedComponent {...args} />;

const Default = Template.bind({});

export default componentMeta;
export { Default };
