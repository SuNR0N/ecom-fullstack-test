import React from 'react';
import { withRouter } from 'react-router';

import '../../stylesheets/productCard.scss';

const formatPrice = (price) => {
  return parseFloat(price / 100).toFixed(2);
}

export const ProductCard = withRouter((props) => {
  const {
    product: {
      cta,
      ctaLink,
      currency,
      description,
      image: {
        path: imageUrl,
        alt: imageAlt,
      },
      price,
      priceLabel,
      productLabel,
      title,
    },
  } = props;

  const handleCTA = () => {
    props.history.push(ctaLink);
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img
          src={imageUrl}
          alt={imageAlt} />
      </div>
      {productLabel &&
        <label className="product-card__label">{productLabel}</label>
      }
      <div className="product-card__details">
        <h1 className="product-card__title">{title}</h1>
        <p className="product-card__description">{description}</p>
        <div className="product-card__price">
          <span>{priceLabel}</span>
          <span className="product-card__price-value">{currency}{formatPrice(price)}</span>
        </div>
      </div>
      <button
        className="product-card__cta"
        onClick={handleCTA}
      >
        {cta}
      </button>
    </div>
  );
});