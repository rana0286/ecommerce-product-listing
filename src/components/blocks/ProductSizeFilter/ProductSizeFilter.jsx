import React, { PureComponent } from 'react';
import Dropdown from '../../elements/Dropdown';

class ProductSizeFilter extends PureComponent {
  render() {
    return <Dropdown {...this.props} />;
  }
}

export default ProductSizeFilter;
