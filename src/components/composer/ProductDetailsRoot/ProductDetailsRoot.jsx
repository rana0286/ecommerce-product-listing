import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProductListHeader, ProductsDetailsList } from '../../module';

class ProductDetailsRoot extends PureComponent {
  render() {
    return (<div>
      <ProductListHeader
        headingLabel={this.props.headingLabel}
        onSelect={this.props.onSelect}
        productSizeOptions={this.props.productSizeOptions}
      />
      <ProductsDetailsList productsList={this.props.productsList}/>
    </div>);
  }
}

ProductDetailsRoot.propTypes = {
  headingLabel: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  productSizeOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetailsRoot;
