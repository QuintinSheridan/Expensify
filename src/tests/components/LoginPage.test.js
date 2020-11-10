import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';
import React from 'react';

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test("should correctly render LoginPage", () => {
    // const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogin", () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});