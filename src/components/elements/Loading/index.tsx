import type { FC } from 'react';

const Loading: FC<{ size: number; className?: string }> = ({ size, className }) => (
  <div className="flex justify-center">
    <div className={`m-5 animate-spin bg-primary ${className}`} style={{ width: size, height: size, borderRadius: (3 / 8) * size }} />
  </div>
);

Loading.defaultProps = {
  className: undefined,
};

export default Loading;
