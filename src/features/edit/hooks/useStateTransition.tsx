import { useState } from 'react';

export type EditState = 'getLogo' | 'getSourceCode' | 'edit';

const useStateTransition = (defaultState: EditState): [EditState, React.Dispatch<React.SetStateAction<EditState>>, () => void, () => void] => {
  const [editState, setEditState] = useState<EditState>(defaultState);

  let prevState: EditState;
  let nextState: EditState;
  switch (editState) {
    case 'getLogo':
      prevState = 'getLogo';
      nextState = 'getSourceCode';
      break;
    case 'getSourceCode':
      prevState = 'getLogo';
      nextState = 'edit';
      break;
    case 'edit':
      prevState = 'getSourceCode';
      nextState = 'edit';
      break;
    default:
      throw new Error('不明なStateが割り当てられました。');
      break;
  }

  const setPrevEditState = () => {
    setEditState(prevState);
  };

  const setNextEditState = () => {
    setEditState(nextState);
  };

  return [editState, setEditState, setPrevEditState, setNextEditState];
};

export default useStateTransition;
