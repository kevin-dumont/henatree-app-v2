import { useCallback, useState } from 'react';

type SetTrue = () => void;
type SetFalse = () => void;
type Toggle = () => void;

export const useBoolean = (initValue = false) => {
  const [state, setState] = useState(initValue);

  const setTrue: SetTrue = useCallback(() => setState(true), []);
  const setFalse: SetFalse = useCallback(() => setState(false), []);
  const toggle: Toggle = useCallback(() => setState((x) => !x), []);

  return [state, setTrue, setFalse, toggle] as const;
};
