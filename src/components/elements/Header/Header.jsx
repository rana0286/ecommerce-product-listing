import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const ProductListHeader = ({ children }) => {
  return (<div className="product-list-header">
    {children}
  </div>);
};

ProductListHeader.propTypes = {
  children: PropTypes.node,
};

ProductListHeader.defaultValue = {
  children: <span></span>,
};

export default ProductListHeader;
