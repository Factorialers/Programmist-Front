import type { FC } from 'react';

const Loading: FC<{ size: number }> = ({ size }) => (
  <div className="flex justify-center">
    <div className="m-5 bg-primary animate-spin" style={{ width: size, height: size, borderRadius: (3 / 8) * size }} />
  </div>
);

export default Loading;
