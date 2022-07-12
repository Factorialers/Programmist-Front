import { FC, useState, KeyboardEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import Tag from '../../../../../../components/elements/Tag';
import workState from '../../../../../../libs/recoil/edit/workState';

export type TagsInputProps = {
  placeholder?: string;
  separators?: string[];
};

const TagsInput: FC<TagsInputProps> = ({ placeholder, separators }) => {
  const [work, setWork] = useRecoilState(workState);
  const [tags, setTags] = useState<string[]>(work.tags);

  const handleOnKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation();

      const text = (event.target as HTMLInputElement).value;

      if (event.key === 'Backspace' && tags.length && !text) {
        setWork({ ...work, tags: tags.slice(0, -1) });
        setTags(tags.slice(0, -1));
      }

      if (text && separators?.includes(event.key)) {
        if (tags.includes(text)) {
          return;
        }

        setWork({ ...work, tags: [...tags, text] });
        setTags([...tags, text]);
        // eslint-disable-next-line no-param-reassign
        (event.target as HTMLInputElement).value = '';
        event.preventDefault();
      }
    },
    [tags, separators, work, setWork],
  );

  const onTagRemove = useCallback(
    (text: string) => {
      setWork({ ...work, tags: tags.filter((tag) => tag !== text) });
      setTags(tags.filter((tag) => tag !== text));
    },
    [tags, work, setWork],
  );

  return (
    <label htmlFor="tag-input" className="box-border flex w-1/2 cursor-text flex-wrap items-center rounded-full bg-base p-5">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} onRemove={onTagRemove} className="m-[2px]" />
      ))}

      <input
        id="tag-input"
        className="w-72 rounded-full border-none px-2 outline-none"
        type="text"
        placeholder={placeholder}
        onKeyDown={handleOnKeyUp}
        maxLength={32}
      />
    </label>
  );
};

TagsInput.defaultProps = {
  placeholder: undefined,
  separators: ['Enter'],
};

export default TagsInput;
