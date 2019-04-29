import React from 'react';
import ProductDetailsRoot from './ProductDetailsRoot';
import renderer from 'react-test-renderer';

describe('src/components/composer/ProductDetailsRoot', () => {
  it('ProductDetailsRoot component should render', () => {
    const tree = renderer.
      create(<ProductDetailsRoot
        headingLabel="Test"
        onSelect={jest.fn()}
        productSizeOptions={[{value: 'Test', label: 'Test'}]}
        productsList={[{}]}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
