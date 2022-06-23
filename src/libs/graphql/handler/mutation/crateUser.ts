import { useCreateUserMutation } from '../../generated/graphql';

const useCreateUserMutationHandler = () => {
  const [{ data, fetching }] = useCreateUserMutation();
  const createdUser = data?.createUser;

  return { createdUser, fetching };
};

export default useCreateUserMutationHandler;
