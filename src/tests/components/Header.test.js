// react-test-render
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
// shallow rendering renders components while full rendering will render the children components as well

test("should render Header correctly", () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.find('h1').length).toBe(1)
})