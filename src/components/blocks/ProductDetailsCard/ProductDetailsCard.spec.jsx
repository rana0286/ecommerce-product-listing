import React from 'react';
import { shallow } from 'enzyme';
import ProductDetailsCard from './ProductDetailsCard';

describe('src/components/blocks/ProductDetailsCard', () => {
  const product = {
    "size": [
      "XS",
      "S",
      "L",
      "XL"
    ],
    "productName": "Striped shirt",
    "productImage": "product-1.jpg",
    "price": "$18.88",
    "isExclusive": false,
    "isSale": true,
    "index": 0
  };

  it('ProductDetailsCard component should render', () => {
    const component = shallow(<ProductDetailsCard product={product} />);
    expect(component.find('li.card').length).toBe(1);
  });
});
