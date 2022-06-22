import ErrorPage from 'next/error';
import type { FC } from 'react';
import Layout from '../components/Layout';

const Error404: FC = () => (
  <Layout pageTitle="404 | Not Found">
    <ErrorPage statusCode={404} />
  </Layout>
);

export default Error404;
