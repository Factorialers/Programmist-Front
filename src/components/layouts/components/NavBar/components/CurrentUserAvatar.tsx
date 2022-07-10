/* eslint-disable tailwindcss/no-custom-classname */
import type { User } from 'firebase/auth';
import type { FC } from 'react';
import { logout } from '../../../../../libs/firebase/auth';
import Avatar from '../../../../elements/Avatar';

const CurrentUserAvatar: FC<{ user: User }> = ({ user }) => (
  <div className="daisy-dropdown daisy-dropdown-end daisy-dropdown-hover">
    <button type="button" className="m-0 btn">
      <Avatar size={42} photoURL={user.photoURL} />
    </button>
    <ul className="p-2 w-52 shadow daisy-dropdown-content daisy-menu bg-base-100 rounded-box">
      <li>
        <button type="button" onClick={logout}>
          <a>Sign out</a>
        </button>
      </li>
    </ul>
  </div>
);

export default CurrentUserAvatar;
