import React from 'react';
import Hello from './Hello';
import {  configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders', () => {
  const wrapper = shallow(<Hello name="Jack" />);
  expect(wrapper.find('p').text()).toEqual('Hello, Jack!');
});

it('uses "Unknown" if no name is passed in', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('p').text()).toEqual('Hello, Unknown!');
  });