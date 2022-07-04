import type { NextPage } from 'next';
import Layout from '../components/layouts';

const HomePage: NextPage = () => (
  <Layout pageTitle="Programmist">
    <div className="my-80 font-serif text-5xl text-center underline">Hello, Programmist World!</div>
  </Layout>
);

export default HomePage;
