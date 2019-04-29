import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';
import renderer from 'react-test-renderer';

describe('src/components/elements/Header', () => {
  it('Header component should render', () => {
    const component = shallow(<Image src="/testPath" alt="image default" />);
    const tree = renderer.
      create(<Image src="/testPath" alt="image default" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(component).toBeDefined();
  });
});
