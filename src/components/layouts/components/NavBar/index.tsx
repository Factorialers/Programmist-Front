import type { FC } from 'react';
import { useAuth } from '../../../../libs/firebase/auth';
import AuthModal from './components/AuthModal';
import CurrentUserAvatar from './components/CurrentUserAvatar';
import Navigation from './components/Navigation';

const NavBar: FC = () => {
  const user = useAuth();

  return (
    <div className="grid grid-cols-10 p-6 bg-base shadow-md">
      <div className="flex col-span-8 col-start-2 justify-center items-center space-x-16">
        <Navigation />
      </div>
      <div className="text-right">{user ? <CurrentUserAvatar user={user} /> : <AuthModal />}</div>
    </div>
  );
};

export default NavBar;
