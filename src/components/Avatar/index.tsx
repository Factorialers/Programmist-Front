/* eslint-disable tailwindcss/no-custom-classname */
import type { User } from 'firebase/auth';
import Image from 'next/image';
import type { FC } from 'react';

const Avatar: FC<{ user: User }> = ({ user }) => (
  <div>
    <div className="daisy-avatar daisy-placeholder">
      <div className="w-[50px] bg-neutral-focus text-neutral-content daisy-mask daisy-mask-squircle">
        {user.photoURL ? (
          <Image loader={() => `${user.photoURL}?w=50`} src={user.photoURL} width={50} height={50} alt="avatar" />
        ) : (
          <span className="text-3xl">{user.uid.slice(0, 2)}</span>
        )}
      </div>
    </div>
  </div>
);

export default Avatar;
