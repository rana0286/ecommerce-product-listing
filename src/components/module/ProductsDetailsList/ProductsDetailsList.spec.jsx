import React from 'react';
import { mount} from 'enzyme';
import ProductsDetailsList from './ProductsDetailsList';
import { ProductDetailsCard } from '../../blocks';
import renderer from 'react-test-renderer';

describe('src/components/module/ProductsDetailsList', () => {
  const produtList = [
    {
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
    },
    {
      "size": [
        "XS",
        "S"
      ],
      "productName": "Denim shirt",
      "productImage": "product-2.jpg",
      "price": "$25.44",
      "isExclusive": false,
      "isSale": false,
      "index": 1
    },
    {
      "size": [
        "S",
        "M"
      ],
      "productName": "Plain cotton t-shirt",
      "productImage": "product-3.jpg",
      "price": "$12.93",
      "isExclusive": true,
      "isSale": false,
      "index": 2
    }
  ];

  const componentRenderer = (props) => <ProductsDetailsList {...props}/>;
  it('ProductsDetailsList component should render', () => {
    const tree = renderer.create(componentRenderer({productsList: produtList})).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ProductsDetailsList should render 2 product card', () => {
    const component = mount(componentRenderer({productsList: produtList}));
    expect(component.find(ProductDetailsCard).length).toBe(3);
  });
});
