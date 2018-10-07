import { actions } from './product-actions';

describe('product-actions', () => {
  describe('loadProductsSucceeded', () => {
    const products = [];
    let action;

    beforeAll(() => {
      action = actions.loadProductsSucceeded(products);
    });

    it('should return an action with the proper type', () => {
      expect(action.type).toEqual('[Product] Load Products Success');
    });

    it('should return an action with the products as its payload', () => {
      expect(action.payload).toBe(products);
    });
  });

  describe('loadProducts', () => {
    let action;

    beforeAll(() => {
      action = actions.loadProducts();
    });

    it('should return an action with the proper type', () => {
      expect(action.type).toEqual('[Product] Load Products Request');
    });
  });

  describe('loadProductsFailed', () => {
    const message = 'Error';
    let action;

    beforeAll(() => {
      action = actions.loadProductsFailed(message);
    });

    it('should return an action with the proper type', () => {
      expect(action.type).toEqual('[Product] Load Products Failure');
    });

    it('should return an action with the message within its payload', () => {
      expect(action.payload).toEqual({ message });
    });
  });
});