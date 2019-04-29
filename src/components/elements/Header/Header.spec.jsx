import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('src/components/elements/Header', () => {
  it('Header component should render', () => {
    const component = shallow(<Header><a>anchor</a></Header>);
    const tree = renderer.
      create(<Header><h1>heading</h1></Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(component).toBeTruthy();
  });
});
