import { atom } from 'recoil';

const logoState = atom<File | null>({
  key: 'logoState',
  default: null,
  dangerouslyAllowMutability: true,
});

export default logoState;
