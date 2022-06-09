import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () =>(
    <Layout PageTitle="Programmist">
    <div className="m-5 font-serif text-5xl text-center underline">Hello, Programmist World!</div>
    <h1>{process.env.NEXT_PUBLIC_apiKey}</h1>
  </Layout>
)
 


export default Home;
