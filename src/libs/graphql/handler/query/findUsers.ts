import { useFindUsersQuery } from '../../generated/graphql';

const useFindUserByIdHandler = () => {
  const [{ data, fetching }] = useFindUsersQuery();
  const foundUsers = data?.findUsers;

  return { foundUsers, fetching };
};

export default useFindUserByIdHandler;
