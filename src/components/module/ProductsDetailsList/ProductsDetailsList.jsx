import React from 'react';
import PropTypes from 'prop-types';
import { ProductDetailsCard } from '../../blocks';

import './ProductsDetailsList.scss';
/**
  * @desc ProductsList component can be used to render render list of products.
  *  @productsList : contains array of products information
*/


const ProductsDetailsList = ({ productsList }) => (
  <ul className="product-list">
    {productsList.map(product => <ProductDetailsCard product={product} key={product.index} />)}
  </ul>
);

ProductsDetailsList.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isExclusive: PropTypes.bool.isRequired,
      isSale: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ProductsDetailsList;
