import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import IsNewUser from '../../features/is-new-user';

const Home: NextPage = () => (
  <Layout pageTitle="Is new user">
    <IsNewUser />
  </Layout>
);

export default Home;
