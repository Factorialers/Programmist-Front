import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import React from 'react'

const CustomApp = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
)

export default CustomApp;
