import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

const CustomApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default CustomApp;
