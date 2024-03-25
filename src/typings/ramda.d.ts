import 'ramda';

declare module 'ramda' {
  function uncurryN<T>(
    len: number,
  ): (fn: (a: any) => any) => (...a: readonly any[]) => T;
}
