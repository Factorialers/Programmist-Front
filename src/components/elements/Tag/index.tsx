import type { FC } from 'react';
import { TiDelete } from 'react-icons/ti';

const Tag: FC<{ text: string; onRemove?: (text: string) => void; className?: string }> = ({ text, onRemove, className }) => (
  <div className={`daisy-badge inline-flex items-center justify-center gap-2 ${className || ''}`}>
    {text}
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        if (onRemove) {
          onRemove(text);
        }
      }}
      aria-label={`remove ${text}`}
      title={`remove ${text}`}
    >
      <TiDelete />
    </button>
  </div>
);

Tag.defaultProps = {
  onRemove: undefined,
  className: undefined,
};

export default Tag;
