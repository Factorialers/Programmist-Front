import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  pageTitle: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ pageTitle, children }) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </div>
);

export default Layout;
