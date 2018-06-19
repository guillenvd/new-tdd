import React from 'react';
import Button from './Button';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('should render without crashing', () => {
    shallow(<Button />);
});

it('should render a button with text Hit me', () => {
    const wrapper = shallow(<Button text="Hit me"/>);
    const buttonText = 'Hit me';
    expect(wrapper.contains(buttonText)).toEqual(true);
});
