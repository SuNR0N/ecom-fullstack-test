import { connect } from 'react-redux';

import { ProductActions } from '../client/actions';
import { HomePage } from './HomePage';

export const mapStateToProps = (state) => ({
  products: state.products,
});

export const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(ProductActions.loadProducts()),
});

export const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage);