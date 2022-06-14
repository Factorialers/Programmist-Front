import Comment from '../components/Article/comment';
import Head from '../components/Article/head';
import Left from '../components/Article/left';
import Right from '../components/Article/right';
import Layout from '../components/Layout/Layout';

const Article = () => (
  <Layout PageTitle="Article">
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-2 py-1 text-center bg-gray-300">
        <Right />
      </div>
      <div className="col-span-6 px-1 text-center bg-gray-300">
        <Head />
        <Comment />
      </div>
      <div className="col-span-1 text-center bg-gray-300 xl:visible 2xl:hidden">
        <Left />
      </div>
    </div>
  </Layout>
);
export default Article;
