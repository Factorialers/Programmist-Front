import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Information = {
  PageTitle: string;
  PageDescription: string;
  PageImage: string;
};

type Props = {
  PageTitle: string;
  PageDescription?: string;
  PageImage?: string;
  children: ReactNode;
};

const DefaultDescription = '';
const DefaultImage = '';

const Metas: FC = () => (
  <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#ffffff" />
  </div>
);

const SeoMetas: FC<Information> = ({ PageTitle, PageDescription, PageImage }) => (
  <div>
    <meta name="name" content={PageTitle} />
    <meta name="image" content={PageImage} />
    <meta name="description" content={PageDescription} />
  </div>
);

const OgpMetas: FC<Information> = ({ PageTitle, PageDescription, PageImage }) => (
  <div>
    <meta property="og:title" content={PageTitle} />
    <meta property="og:description" content={PageDescription} />
    <meta property="og:image" content={PageImage} />
    <meta property="og:image:alt" content="" />
    <meta property="og:site_name" content="" />
  </div>
);

const TwitterMetas: FC<Information> = ({ PageTitle, PageDescription, PageImage }) => (
  <div>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content={PageTitle} />
    <meta name="twitter:description" content={PageDescription} />
    <meta name="twitter:image" content={PageImage} />
  </div>
);

const Layout: FC<Props> = ({ PageTitle, children, PageDescription = DefaultDescription, PageImage = DefaultImage }) => (
  <div>
    <Head>
      <title>{PageTitle}</title>
      <Metas />
      <SeoMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
      <OgpMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
      <TwitterMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
    </Head>
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </div>
);

Layout.defaultProps = {
  PageDescription: DefaultDescription,
  PageImage: DefaultImage,
};

export default Layout;