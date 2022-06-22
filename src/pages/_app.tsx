import type { AppProps } from 'next/app';
import type { FC } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default CustomApp;
