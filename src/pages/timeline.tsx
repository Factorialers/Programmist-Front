import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Popup from '../components/popup';

const Timeline: NextPage = () => (
  <Layout PageTitle="Timeline">
    <Popup />
  </Layout>
);
export default Timeline;
