import React from 'react';
import { shallow } from 'enzyme';
import Component from './app.jsx';

describe('src/app.jsx', () => {
  it('App component should render', () => {
    const component = shallow(<Component />);
    expect(component).toBeTruthy();
  });
});
