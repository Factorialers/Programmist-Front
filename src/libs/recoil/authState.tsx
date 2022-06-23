import type { User } from 'firebase/auth';
import { atom } from 'recoil';

const authState = atom<User | null>({
  key: 'authState',
  default: null,
  dangerouslyAllowMutability: true,
});

export default authState;
