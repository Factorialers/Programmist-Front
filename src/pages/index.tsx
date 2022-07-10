import type { NextPage } from 'next';
import Layout from '../components/layouts';

const HomePage: NextPage = () => (
  <Layout pageTitle="Programmist">
    <div className="my-80 text-center font-serif text-5xl underline">Hello, Programmist World!</div>
  </Layout>
);

export default HomePage;
