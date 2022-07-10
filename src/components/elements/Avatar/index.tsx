/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import type { FC } from 'react';

const Avatar: FC<{ size: number; photoURL: string | null; altIconContent?: string }> = ({ size, photoURL, altIconContent }) => (
  <div>
    <div className="daisy-placeholder daisy-avatar">
      <div className="daisy-mask daisy-mask-squircle bg-neutral-focus text-neutral-content" style={{ width: size }}>
        {photoURL ? (
          <Image loader={() => `${photoURL}?w=${size}`} src={photoURL} width={size} height={size} alt="avatar" />
        ) : (
          <span className="text-3xl">{altIconContent?.slice(0, 3)}</span>
        )}
      </div>
    </div>
  </div>
);

Avatar.defaultProps = {
  altIconContent: '^_^',
};

export default Avatar;
