import React from 'react';
import { mount, shallow } from 'enzyme';
import DropDown from './Dropdown';
import renderer from 'react-test-renderer';

describe('src/components/elements/Dropdown', () => {
  const options = [
    {
      label: 'Filter by size',
      value: '',
    },
    {
      label: 'XS',
      value: 'XS',
    },
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'XL',
      value: 'XL',
    },
  ];

  const onChangeMock = jest.fn();
  it('Drop down component should render', () => {
    const component = shallow(<DropDown options={options} onSelect={onChangeMock}/>);
    const tree = renderer.
      create(<DropDown options={options} onSelect={onChangeMock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(component).toBeTruthy();
  });

  it('Drop down component should call onSelect with selected value', () => {
    const event = {
      preventDefault() {},
      target: { value: 'test-value' }
    };
    const component = mount(<DropDown options={options} onSelect={onChangeMock}/>);
    component.find('select').simulate('change', event);
    expect(onChangeMock).toBeCalledWith('test-value');
  });
});
