import { atom } from 'recoil';

const markdownState = atom<string | undefined>({
  key: 'markdownState',
  default: undefined,
  dangerouslyAllowMutability: true,
});

export default markdownState;
