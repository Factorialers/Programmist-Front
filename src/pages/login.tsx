import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import { Login } from '../libs/firebase/firebase';

const LoginPage: NextPage = () => (
  <Layout PageTitle="Trend">
    <h1>This Page is Login</h1>
    <div className="flex justify-center hover:opacity-60 duration-300">
        <Image 
		src="/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png"
		 alt="Picture of the author"
		  width={200}
		   height={50}
		   onClick={Login}
		    />
    </div>
  </Layout>
);
export default LoginPage;
