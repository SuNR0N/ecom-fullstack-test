import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const product = {
    title: 'Simple Canvas',
    description: 'Lets your pictures speak for themselves.',
    image: {
      path: '/images/product.jpg',
      alt: 'Simple Canvas'
    },
    price: 1500,
    currency: '£',
    priceLabel: 'From',
    productLabel: 'bestseller',
    cta: 'Shop Now',
    ctaLink: '/random/link/to/no/where',
  };
  const pushMock = jest.fn();
  const historyMock = {
    listen: jest.fn(),
    location: {
      pathname: '/',
    },
    push: pushMock,
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router history={historyMock}>
        <ProductCard product={product} />
      </Router>
    );
  });

  it('should apply the "product-card" class', () => {
    expect(wrapper.hasClass('product-card')).toBeTruthy();
  });

  describe('image', () => {
    let image;

    beforeEach(() => {
      image = wrapper.find('.product-card__image img');
    });

    it('should have its src set', () => {
      expect(image.prop('src')).toEqual(product.image.path);
    });

    it('should have its alt set', () => {
      expect(image.prop('alt')).toEqual(product.image.alt);
    });
  });

  describe('label', () => {
    it('should be rendered if the productLabel exists', () => {
      const label = wrapper.find('.product-card__label');

      expect(label.text()).toEqual(product.productLabel);
    });

    it('should not be rendered if the productLabel does not exist', () => {
      const productWithoutLabel = {
        ...product,
        productLabel: '',
      };
      wrapper = mount(
        <Router history={historyMock}>
          <ProductCard product={productWithoutLabel} />
        </Router>
      );
      const label = wrapper.find('.product-card__label');

      expect(label.exists()).toBeFalsy();
    });
  });

  describe('title', () => {
    it('should be rendered', () => {
      const title = wrapper.find('.product-card__title');

      expect(title.text()).toEqual(product.title);
    });
  });

  describe('description', () => {
    it('should be rendered', () => {
      const description = wrapper.find('.product-card__description');

      expect(description.text()).toEqual(product.description);
    });
  });

  describe('price', () => {
    it('should render its label', () => {
      const label = wrapper.find('.product-card__price span').first();

      expect(label.text()).toEqual('From');
    });

    it('should render its formatted value with the currency', () => {
      const value = wrapper.find('.product-card__price-value');

      expect(value.text()).toEqual('£15.00');
    });
  });

  describe('cta', () => {
    let button;

    beforeEach(() => {
      button = wrapper.find('.product-card__cta');
    });

    it('should render its text properly', () => {
      expect(button.text()).toEqual(product.cta);
    });

    it('should navigate to the provied link when the button is clicked', () => {
      button.simulate('click');

      expect(pushMock).toHaveBeenCalledWith('/random/link/to/no/where');
    });
  });
});