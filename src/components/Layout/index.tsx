import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  PageTitle: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ PageTitle, children }) => (
  <div>
    <Head>
      <title>{PageTitle}</title>
    </Head>
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </div>
);

export default Layout;
