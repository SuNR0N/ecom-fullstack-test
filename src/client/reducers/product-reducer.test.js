import { actions } from '../actions/product-actions';
import {
  initialState,
  reducer,
} from './product-reducer';

describe('product-reducer', () => {
  describe('initialState', () => {
    it('should initialise "products" as an empty array', () => {
      expect(initialState.products).toHaveLength(0);
    });
  });

  describe('reducer', () => {
    it('should handle LOAD_PRODUCTS_SUCCESS', () => {
      const products = [{}, {}];
      const action = actions.loadProductsSucceeded(products);
      const state = reducer(initialState, action);

      expect(state.products).toEqual(products);
    });

    it('should handle an unknown action', () => {
      const state = reducer(initialState, { type: 'FOO_BAR' });

      expect(state).toBe(initialState);
    });
  });
});