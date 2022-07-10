import { atom } from 'recoil';

const sourceCodeState = atom<File[] | null>({
  key: 'sourceCodeState',
  default: null,
  dangerouslyAllowMutability: true,
});

export default sourceCodeState;
