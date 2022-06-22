import { Head, Html, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const CustomDocument: FC = () => (
  <Html lang="ja" data-theme="programmist">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
