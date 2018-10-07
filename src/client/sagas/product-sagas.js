import {
  all,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import {
  ProductActions,
  ProductActionTypes,
} from '../actions';
import { ProductsApi } from '../api/products-api';

export function* loadProducts() {
  try {
    const products = yield call(ProductsApi.getProducts);
    yield put(ProductActions.loadProductsSucceeded(products));
  } catch (error) {
    yield put(ProductActions.loadProductsFailed(error.message));
  }
}

export function* productSagas() {
  yield all([
    takeEvery(ProductActionTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
  ]);
}