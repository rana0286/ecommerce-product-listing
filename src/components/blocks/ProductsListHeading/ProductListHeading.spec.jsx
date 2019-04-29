import React from 'react';
import { mount } from 'enzyme';
import ProductListHeading from './ProductListHeading';
import renderer from 'react-test-renderer';

describe('src/components/blocks/ProductListHeading', () => {
  it('ProductListHeading component should render with h2', () => {
    const component = mount(<ProductListHeading headingLabel="Test" />);
    const tree = renderer.
      create(<ProductListHeading headingLabel="Test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.find('h2').length).toBe(1);
  });
});
