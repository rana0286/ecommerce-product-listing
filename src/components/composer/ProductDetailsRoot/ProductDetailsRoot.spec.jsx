import React from 'react';
import ProductDetailsRoot from './ProductDetailsRoot';
import renderer from 'react-test-renderer';

describe('src/components/composer/ProductDetailsRoot', () => {
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
  it('ProductDetailsRoot component should render', () => {
    const tree = renderer.
      create(<ProductDetailsRoot
        headingLabel="Test"
        onSelect={jest.fn()}
        productSizeOptions={[{value: 'Test', label: 'Test'}]}
        productsList={[product]}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
