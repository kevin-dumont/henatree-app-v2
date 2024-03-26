export type EmptyObj = Record<string, never>;
export type Obj = Record<string, unknown>;

export type KeyOf<T extends Obj> = Extract<keyof T, string>;
export type ValueOf<T extends Obj> = T[KeyOf<T>];

export type Any = string | number | boolean | symbol | Obj | null | undefined;

export type DefinedAny = Exclude<Any, undefined>;

export type RequireKey<T, U extends keyof T> = Pick<Required<T>, U> &
  Exclude<T, U>;
