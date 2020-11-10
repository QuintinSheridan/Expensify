// react-test-render
import React from 'react';
import { Header }  from '../../components/Header';
import { shallow } from 'enzyme';

// shallow rendering renders components while full rendering will render the children components as well

let startLogout, wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
})

test("should render Header correctly", () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').length).toBe(1)
})

// logout
test("should call startLogout", () => {
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})