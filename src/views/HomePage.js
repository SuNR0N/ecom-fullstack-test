import React, { Component } from 'react';

import '../stylesheets/homePage.scss';
import { ProductCard } from '../client/components/ProductCard';

export class HomePage extends Component {
  productCardRenderer = (product, index) => (
    <ProductCard product={product} key={index} />
  )

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const {
      productCardRenderer,
      props: {
        products,
      },
    } = this;

    return (
      <main>
        <ul>
          {products.map(productCardRenderer)}
        </ul>
      </main>
    );
  }
}

HomePage.defaultProps = { products: [] };