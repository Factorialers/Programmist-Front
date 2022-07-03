import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

type Props = {
  pageTitle: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ pageTitle, children }) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
