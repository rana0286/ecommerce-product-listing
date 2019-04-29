import React from 'react';
import ProductListHeader from './ProductListHeader';
import renderer from 'react-test-renderer';

describe('src/components/module/ProductListHeader', () => {
  it('ProductListHeader component should render', () => {
    const tree = renderer.create(<ProductListHeader
      headingLabel="Test label"
      onSelect={jest.fn()}
      productSizeOptions={[{value:'X', label: 'X'}]}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
