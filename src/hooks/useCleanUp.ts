import { useRef } from 'react';

type Callback = () => void;

const call = (fn: Callback) => fn();

export const useCleanUp = () => {
  const callbacks = useRef<Callback[]>([]);

  const addCleanUpFn = (fn: Callback) => callbacks?.current.push(fn);

  const runCleanUp = () => callbacks?.current.forEach(call);

  return [addCleanUpFn, runCleanUp] as const;
};
