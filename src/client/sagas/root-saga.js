import {
  all,
  fork,
} from 'redux-saga/effects';

import { productSagas } from './product-sagas';

export function* rootSaga() {
  yield all([
    fork(productSagas),
  ]);
}