import { useFindUserByIdQuery } from '../../generated/graphql';

const useFindUserByIdHandler = (id: string) => {
  const [{ data, fetching }] = useFindUserByIdQuery({ variables: { where: { id } } });
  const foundUser = data?.findUserById;

  return { foundUser, fetching };
};

export default useFindUserByIdHandler;
