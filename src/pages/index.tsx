import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => (
  <Layout PageTitle="Programmist">
    <div className="m-5 font-serif text-5xl text-center underline">Hello, Programmist World!</div>
  </Layout>
);

export default Home;
