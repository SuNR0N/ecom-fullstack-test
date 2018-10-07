import {
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {
  initialProductsState,
  product,
} from '../reducers';
import { rootSaga } from '../sagas/root-saga';

const initialStoreState = initialProductsState;

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middlewares = [sagaMiddleware];

  return createStore(
    product,
    initialState,
    applyMiddleware(...middlewares)
  );
}

export const store = configureStore(initialStoreState);
sagaMiddleware.run(rootSaga);