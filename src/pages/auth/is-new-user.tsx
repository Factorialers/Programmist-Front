import type { NextPage } from 'next';
import Layout from '../../components/layouts';
import IsNewUser from '../../features/is-new-user';

const IsNewUserPage: NextPage = () => (
  <Layout pageTitle="Is new user">
    <IsNewUser />
  </Layout>
);

export default IsNewUserPage;
