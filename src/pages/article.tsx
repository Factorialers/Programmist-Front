import { useState, useEffect } from 'react';
import Center from '../components/Article';
import Comment from '../components/Article/comment';
import Head from '../components/Article/head';
import Left from '../components/Article/left';
import Right from '../components/Article/right';
import Layout from '../components/Layout/Layout';
import { toString, getFile } from '../libs/firebase/files';

const Article = () => {
  const [string, setString] = useState<string>('');
  useEffect(() => {
    getFile('files/idea-2.md')
      .then((blob: Blob) => {
        toString(blob)
          .then((text: string) => {
            setString(text);
          })
          .catch((error_message) => {
            alert(error_message);
          });
      })
      .catch((error_message) => {
        alert(error_message);
      });
  });
  return (
    <Layout PageTitle="Article">
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-2 py-1 text-center bg-gray-300">
          <Right />
        </div>
        <div className="col-span-6 px-1 text-center bg-gray-300">
          <Head />
          <Center str={string} />
          <Comment />
        </div>
        <div className="col-span-1 text-center bg-gray-300 xl:visible 2xl:hidden">
          <Left str={string}/>
        </div>
      </div>
    </Layout>
  );
};
export default Article;
