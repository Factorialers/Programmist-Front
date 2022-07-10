import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const Layout: FC<{ pageTitle: string; className?: string; children: ReactNode }> = ({ pageTitle, className, children }) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <div className={className}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

Layout.defaultProps = {
  className: 'bg-white',
};

export default Layout;
