/* eslint-disable tailwindcss/no-custom-classname */
import type { User } from 'firebase/auth';
import type { FC } from 'react';
import { logout } from '../../../../../libs/firebase/auth';
import Avatar from '../../../../elements/Avatar';

const CurrentUserAvatar: FC<{ user: User }> = ({ user }) => (
  <div className="daisy-dropdown-end daisy-dropdown-hover daisy-dropdown">
    <button type="button" className="btn m-0">
      <Avatar size={42} photoURL={user.photoURL} />
    </button>
    <ul className="daisy-dropdown-content daisy-menu rounded-box w-52 bg-base-100 p-2 shadow">
      <li>
        <button type="button" onClick={logout}>
          <a>Sign out</a>
        </button>
      </li>
    </ul>
  </div>
);

export default CurrentUserAvatar;
