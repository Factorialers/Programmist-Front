import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Logged from '../components/login/logged';
import { AuthProvider } from '../libs/firebase/authProvider';

const Logg: NextPage = () => (
  <Layout PageTitle="Trend">
    <AuthProvider>
      <Logged />
    </AuthProvider>
  </Layout>
);
export default Logg;
