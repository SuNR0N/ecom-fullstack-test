export const ActionTypes = {
  LOAD_PRODUCTS_REQUEST: '[Product] Load Products Request',
  LOAD_PRODUCTS_FAILURE: '[Product] Load Products Failure',
  LOAD_PRODUCTS_SUCCESS: '[Product] Load Products Success',
};

export const actions = {
  loadProductsSucceeded: (products) => ({
    type: ActionTypes.LOAD_PRODUCTS_SUCCESS,
    payload: products,
  }),
  loadProducts: () => ({
    type: ActionTypes.LOAD_PRODUCTS_REQUEST,
  }),
  loadProductsFailed: (message) => ({
    type: ActionTypes.LOAD_PRODUCTS_FAILURE,
    payload: { message },
  }),
};