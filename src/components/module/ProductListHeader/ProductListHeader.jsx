import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProductsSizeFilter, ProductsListHeading }from '../../blocks';
import { Header } from '../../elements';
import noop from 'lodash/noop';
import './ProductListHeader.scss';

class ProductListHeader extends PureComponent {
  render() {
    return (<Header>
      <div className="product-list-header__heading">
        <ProductsListHeading  headingLabel={this.props.headingLabel} />
      </div>
      <div className="product-list-header__filter">
        <ProductsSizeFilter onSelect={this.props.onSelect} options={this.props.productSizeOptions} />
      </div>
    </Header>);
  }
}

ProductListHeader.propTypes = {
  headingLabel: PropTypes.string,
  onSelect: PropTypes.func,
  productSizeOptions: PropTypes.arrayOf(PropTypes.object),
};

ProductListHeader.defaultValue = {
  headingLabel: '',
  onSelect: noop,
  productSizeOptions: [],
};

export default ProductListHeader;
