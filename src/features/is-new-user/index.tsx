import type { User } from 'firebase/auth';
import Error from 'next/error';
import Router from 'next/router';
import type { FC } from 'react';
import Loading from '../../components/Loading';
import { useAuth } from '../../libs/firebase/auth';
import useFindUserByIdHandler from '../../libs/graphql/handler/query/findUsers';

const FindUserById: FC<{ user: User }> = ({ user }) => {
  const { foundUser, fetching } = useFindUserByIdHandler(user.uid);

  if (!fetching) {
    if (foundUser) {
      Router.push('/');
    } else {
      Router.push('/auth/new-user');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Loading size={150} />
    </div>
  );
};

const IsNewUser: FC = () => {
  const user = useAuth();
  if (!user) {
    return <Error statusCode={500} />;
  }

  return <FindUserById user={user} />;
};

export default IsNewUser;
