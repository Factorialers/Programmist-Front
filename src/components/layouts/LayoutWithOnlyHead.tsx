import Head from 'next/head';
import type { FC, ReactNode } from 'react';

const LayoutWithOnlyHead: FC<{ pageTitle: string; className?: string; children: ReactNode }> = ({ pageTitle, className, children }) => (
  <div className={`${className} h-full`}>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <main className={className}>{children}</main>
  </div>
);

LayoutWithOnlyHead.defaultProps = {
  className: 'bg-white',
};

export default LayoutWithOnlyHead;
