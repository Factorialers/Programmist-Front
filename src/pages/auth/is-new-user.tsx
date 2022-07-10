import type { NextPage } from 'next';
import Layout from '../../components/layouts';
import IsNewUser from '../../features/auth/is-new-user';

const IsNewUserPage: NextPage = () => (
  <Layout pageTitle="Is new user | Programmist">
    <IsNewUser />
  </Layout>
);

export default IsNewUserPage;
