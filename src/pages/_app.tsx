import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import 'tailwindcss/tailwind.css';
import { Provider } from 'urql';
import urqlClient from '../libs/urql';
import '../styles/globals.scss';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Provider value={urqlClient}>
      <Component {...pageProps} />
    </Provider>
  </RecoilRoot>
);

export default CustomApp;
