import type { NextPage } from 'next';
import Layout from '../../components/layouts';
import Editor from '../../features/edit/export';

const EditPage: NextPage = () => (
  <Layout pageTitle="作品情報編集 | Programmist">
    <Editor />
  </Layout>
);

export default EditPage;
