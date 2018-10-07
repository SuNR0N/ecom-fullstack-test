import { actions } from '../client/actions/product-actions';
import {
  mapDispatchToProps,
  mapStateToProps,
} from './HomePageConnected';

describe('HomePageConnected', () => {
  describe('mapDispatchToProps', () => {
    it('should map the loadProducts function', () => {
      const loadProductsSpy = jest.spyOn(actions, 'loadProducts');
      const { loadProducts } = mapDispatchToProps(jest.fn());
      loadProducts();

      expect(loadProductsSpy).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should map products', () => {
      const productsMock = [{}, {}];
      const state = {
        products: productsMock,
      };
      const { products } = mapStateToProps(state);

      expect(products).toBe(productsMock);
    });
  });
});