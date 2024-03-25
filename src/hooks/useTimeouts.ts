import { useCleanUp } from './useCleanUp';

type Callback = () => void;

export const useTimeouts = () => {
  const [addCleanUp, clearTimeouts] = useCleanUp();

  const addTimeout = (fn: Callback, delay: number) => {
    const timeout = setTimeout(fn, delay);

    addCleanUp(() => clearTimeout(timeout));
  };

  return [addTimeout, clearTimeouts] as const;
};
