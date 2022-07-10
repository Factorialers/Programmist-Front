import type { FC } from 'react';

const Toggle: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <label htmlFor="toggle" className="h-8">
    <input id="toggle" type="checkbox" className="peer sr-only" onClick={onClick} />
    <span className="inline-block w-16 cursor-pointer rounded-full bg-secondary p-1 after:block after:h-6 after:w-6 after:rounded-full after:bg-base after:transition peer-checked:bg-primary peer-checked:after:translate-x-8" />
  </label>
);

Toggle.defaultProps = {
  onClick: undefined,
};

export default Toggle;
