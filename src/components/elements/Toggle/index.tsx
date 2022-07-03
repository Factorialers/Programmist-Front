import type { FC } from 'react';

const Toggle: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <label htmlFor="toggle" className="h-8">
    <input id="toggle" type="checkbox" className="peer sr-only" onClick={onClick} />
    <span className="inline-block after:block p-1 w-16 after:w-6 after:h-6 bg-secondary after:bg-base peer-checked:bg-primary rounded-full after:rounded-full after:transition peer-checked:after:translate-x-8 cursor-pointer" />
  </label>
);

Toggle.defaultProps = {
  onClick: undefined,
};

export default Toggle;
