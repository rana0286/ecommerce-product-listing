import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import ConnectedComponent, { ProductDetailsPage } from './ProductDetailsPage';
import renderer from 'react-test-renderer';

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

const exStore = {
  getState: () => ({
    filteredProductList: [],
  }),
  subscribe: x => x,
  dispatch: x => x,
};

describe('src/pages/ProductDetailsPage', () => {
  it('ProductDetailsPage component should render', () => {
    const tree = renderer.
      create(<Provider store={exStore}><ConnectedComponent
        headingLabel="Test"
        onSelect={jest.fn()}
        productSizeOptions={[{ value: 'Test', label: 'Test' }]}
        getProductDetails={jest.fn()}
      /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('filterProductDetails action should be call', () => {
    const mockeFilterAction = jest.fn();
    const component = shallow(<ProductDetailsPage
      headingLabel="Test"
      productSizeOptions={[{ value: 'Test', label: 'Test' }]}
      getProductDetails={jest.fn()}
      filterProductDetails={mockeFilterAction}
      filteredProductList={[product]}
    />);
    component.instance().filterProducts('XL');
    expect(mockeFilterAction).toBeCalledWith('XL');
  });
});
