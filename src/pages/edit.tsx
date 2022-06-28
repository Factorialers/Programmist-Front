import type { NextPage } from 'next';
import EditMd from '../components/Edit';
import Layout from '../components/Layout';

const Edit: NextPage = () => (
  <Layout pageTitle="Programmist">
    <EditMd />
  </Layout>
);

export default Edit;
