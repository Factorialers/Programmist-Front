import type { NextPage } from 'next';
import LayoutWithOnlyHead from '../../components/layouts/LayoutWithOnlyHead';
import NewUser from '../../features/auth/new-user';

const NewUserPage: NextPage = () => (
  <LayoutWithOnlyHead pageTitle="サインアップ | Programmist">
    <NewUser />
  </LayoutWithOnlyHead>
);

export default NewUserPage;
