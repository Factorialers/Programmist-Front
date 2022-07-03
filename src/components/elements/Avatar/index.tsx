/* eslint-disable tailwindcss/no-custom-classname */
import type { User } from 'firebase/auth';
import Image from 'next/image';
import type { FC } from 'react';

const Avatar: FC<{ size: number; user: User }> = ({ size, user }) => (
  <div>
    <div className="daisy-avatar daisy-placeholder">
      <div className="bg-neutral-focus text-neutral-content daisy-mask daisy-mask-squircle" style={{ width: size }}>
        {user.photoURL ? (
          <Image loader={() => `${user.photoURL}?w=${size}`} src={user.photoURL} width={size} height={size} alt="avatar" />
        ) : (
          <span className="text-3xl">{user.uid.slice(0, 2)}</span>
        )}
      </div>
    </div>
  </div>
);

export default Avatar;
