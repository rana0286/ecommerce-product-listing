import React from 'react';
import PropTypes from 'prop-types';
import { Image, Tag } from '../../elements';
import { copyProvider } from '.././../../utils';

import './ProductDetailsCard.scss';

const productTagTypes = copyProvider('productTagTypes');

/**
  * @desc Product component can be used to render each product
  *  This component will render product details such as Product name, size,
  *  price, product image, sale and exclusive etc
  *  @product : product object contains details of product
*/

const propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isExclusive: PropTypes.bool.isRequired,
    isSale: PropTypes.bool.isRequired,
  }).isRequired,
};

const ProductDetailsCard = ({ product }) => (
  <li className="card">
    <Image
      src={`./assets/img/products/${product.productImage}`}
      alt={product.productName}
    />
    <div className="product">
      <div className="tag">
        {product.isExclusive && (
          <Tag tagType="exclusive" tagLabel={productTagTypes.exclusive} />
        )}
        {product.isSale && <Tag tagType="sale" tagLabel={productTagTypes.sale} />}
      </div>
      <div className="description">
        <div className="description__name">{product.productName}</div>
        <div className="description__price">{product.price}</div>
      </div>
    </div>
  </li>
);


ProductDetailsCard.propTypes = propTypes;

export default ProductDetailsCard;
