import { atom } from 'recoil';

type Work = {
  logo: File | null;
  sourceCode: File[];
  title: string | null;
  tags: string[];
  markdown: string | null | undefined;
};

const workState = atom<Work>({
  key: 'workState',
  default: {
    logo: null,
    sourceCode: [],
    title: null,
    tags: [],
    markdown: null,
  },
  dangerouslyAllowMutability: true,
});

export default workState;
