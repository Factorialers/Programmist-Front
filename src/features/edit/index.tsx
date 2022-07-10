/* eslint-disable tailwindcss/no-custom-classname */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ReactNode, FC, ComponentType } from 'react';
import Loading from '../../components/elements/Loading';
import EditLayout from './components/EditLayout/index';
import GetLogo from './components/GetLogo/index';
import GetSourceCode from './components/GetSourceCode';
import useStateTransition from './hooks/useStateTransition';

const MdEditor = dynamic(import('./components/Editor'), { ssr: false, loading: () => <Loading size={150} className="bg-base" /> });

const Edit: FC = () => {
  const [editState, , setPrevEditState, setNextEditState] = useStateTransition('getLogo');

  let ResComponent: FC | ComponentType;
  let stepTitle: string;
  let stepContent: ReactNode;
  switch (editState) {
    case 'getLogo':
      ResComponent = GetLogo;
      stepTitle = 'STEP 1. 作品のロゴを設定する';
      stepContent = 'あなたの作品のロゴを設定しましょう。ここで設定した画像は、SNS等で表示できるOGPに自動で組み込まれます。';
      break;
    case 'getSourceCode':
      ResComponent = GetSourceCode;
      stepTitle = 'STEP 2. 作品のソースコードを設定する';
      stepContent = 'あなたの作品を構成するソースコードを設定しましょう。もしソースコードを公開したくない場合は、この工程を省略することができます。';
      break;
    case 'edit':
      ResComponent = MdEditor;
      stepTitle = 'STEP 3. 作品の説明を記述する';
      stepContent = (
        <span>
          あなたの作品の説明を記述しましょう。説明にはMarkdown記法を使用できます。より詳しい記法については、
          <Link href="/">
            <a className="underline text-accent-focus">こちら</a>
          </Link>
          を参照してください。
        </span>
      );
      break;
    default:
      throw new Error('不明なStateが割り当てられました。');
      break;
  }

  return (
    <EditLayout stepTitle={stepTitle} stepContent={stepContent} setPrevEditState={setPrevEditState} setNextEditState={setNextEditState}>
      <ResComponent />
    </EditLayout>
  );
};

export default Edit;
