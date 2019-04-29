import React from 'react';
import { shallow } from 'enzyme';
import Tag from './Tag';
import renderer from 'react-test-renderer';

describe('src/components/elements/Tag', () => {
  it('Tag component should render', () => {
    const component = shallow(<Tag  tagType="sale" tagLabel="sale" />);
    const tree = renderer.
      create(<Tag tagType="exclusive" tagLabel="exclusive"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(component).toBeDefined();
  });
});
