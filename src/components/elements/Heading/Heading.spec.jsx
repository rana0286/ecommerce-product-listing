import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';
import renderer from 'react-test-renderer';

describe('src/components/elements/Header', () => {
  it('Header component should render', () => {
    const component = shallow(<Heading Variation="h1">Test heading</Heading>);
    const tree = renderer.
      create(<Heading Variation="h2">Test heading</Heading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.find('h1').length).toBe(1);
  });
});
