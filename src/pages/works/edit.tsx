import type { NextPage } from 'next';
import Layout from '../../components/layouts';
import EditMd from '../../features/edit';

const EditPage: NextPage = () => (
  <Layout pageTitle="作品情報編集 | Programmist">
    <EditMd />
  </Layout>
);

export default EditPage;
