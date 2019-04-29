import React, { PureComponent } from 'react';
import { DropDown } from '../../elements';

class ProductSizeFilter extends PureComponent {
  render() {
    return <DropDown {...this.props} />;
  }
}

export default ProductSizeFilter;
