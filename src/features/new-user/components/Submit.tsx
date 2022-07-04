/* eslint-disable tailwindcss/no-custom-classname */
import Router from 'next/router';
import type { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import useCreateUserMutationHandler from '../../../libs/graphql/handler/mutation/crateUser';

const Submit: FC<{ isAble: boolean; id: string; name: string }> = ({ isAble, id, name }) => {
  const { fetching, executeMutation } = useCreateUserMutationHandler();

  return (
    <button
      type="submit"
      className={`gap-2 bg-primary border-none daisy-btn ${isAble ? '' : 'daisy-btn-disabled'} ${fetching ? 'daisy-loading' : ''} text-primary-content hover:bg-primary-focus`}
      onClick={async () => {
        await executeMutation({ data: { id, name } });
        Router.push('/');
      }}
    >
      Sign Up
      <FiSend />
    </button>
  );
};

export default Submit;
