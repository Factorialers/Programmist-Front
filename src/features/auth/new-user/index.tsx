import Error from 'next/error';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useAuth } from '../../../libs/firebase/auth';
import Submit from './components/Submit';

const NewUser: FC = () => {
  const user = useAuth();
  const defaultName = user?.displayName ? user.displayName : '';
  const [userName, setUserName] = useState(defaultName);

  if (!(user && user.displayName)) {
    return <Error statusCode={500} />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-8">
        <Image src="/favicon.svg" width="300" height="300" alt="favicon" />
      </div>
      <p className="mb-8 text-4xl font-bold">Welcome to Programmist!</p>
      <input
        type="text"
        placeholder="your nickname"
        className="mb-5 w-1/3 h-10 border-b-2 focus:border-primary outline-none duration-300"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <Submit isAble={!!userName} id={user.uid} name={userName} />
    </div>
  );
};

export default NewUser;
