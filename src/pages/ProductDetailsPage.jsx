import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { connect } from 'react-redux';
import { copyProvider } from '../utils';
import { productSizeOptions } from '../constants';
import { ProductDetailsRoot } from '../components/composer';
import { getProductDetails, filterProductDetails } from '../actions';

import './ProductDetailsPage.scss';

export class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.filterProducts = this.filterProducts.bind(this);
  }

  componentDidMount() {
    this.props.getProductDetails();
  }

  filterProducts(value) {
    this.props.filterProductDetails(value);
  }
  render() {
    return (<div className="main-container">
      <ProductDetailsRoot
        headingLabel={copyProvider('womensTopHeading')}
        onSelect={this.filterProducts}
        productSizeOptions={productSizeOptions}
        productsList={this.props.filteredProductList}
      />
    </div>);
  }
}

ProductDetailsPage.propTypes = {
  filteredProductList:  PropTypes.arrayOf(
    PropTypes.shape({
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isExclusive: PropTypes.bool.isRequired,
      isSale: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  getProductDetails: PropTypes.func.isRequired,
  filterProductDetails: PropTypes.func,
};

ProductDetailsPage.defaultValue = {
  filterProductDetails: noop,
};

export const mapStateToProps = ({filteredProductList}) => {
  return { filteredProductList };
};

export const mapDispatchToProps = dispatch => ({
  getProductDetails: () => dispatch(getProductDetails()),
  filterProductDetails: (selectedFilter) => dispatch(filterProductDetails(selectedFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
