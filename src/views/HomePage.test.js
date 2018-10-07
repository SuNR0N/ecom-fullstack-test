import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';

import { HomePage } from './HomePage';
import { ProductCard } from '../client/components/ProductCard';

describe('HomePage', () => {
  const minProps = {
    loadProducts: jest.fn(),
    products: [],
  };

  describe('componentDidMount', () => {
    it('should call the loadProducts function', () => {
      const loadProductsMock = jest.fn();
      const props = {
        ...minProps,
        loadProducts: loadProductsMock,
      };
      mount(<HomePage {...props} />);

      expect(loadProductsMock).toHaveBeenCalled();
    });
  });

  it('should display as many product cards as the number of products', () => {
    const products = [
      { image: {} },
      { image: {} },
    ];
    const props = {
      ...minProps,
      products,
    };
    const wrapper = shallow(<HomePage {...props} />);
    const productCards = wrapper.find(ProductCard);

    expect(productCards).toHaveLength(products.length);
  });
});