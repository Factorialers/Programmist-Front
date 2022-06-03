import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const CustomApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default CustomApp;
