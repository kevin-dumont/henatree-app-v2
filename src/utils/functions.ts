import R from 'ramda';
import _ from 'lodash';

type Callback = (v: any) => boolean;

export const predicateTypeGuard =
  <T, U>(fn: Callback) =>
  (v: U | T): v is T =>
    fn(v) as boolean;

export const isNotEmpty = R.complement(R.isEmpty);
export const isNotUndefined = R.complement(R.isNil);

export const whenDefined = R.curry(R.when)(R.pipe(_.isUndefined, R.not));
