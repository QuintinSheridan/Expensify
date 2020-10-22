import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


// render blank form
test('should render empty ExpenseForm correctly', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

// render form with data (edit)
test(" should render ExpenseForm with data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

// render error when amount and description aren't provided
test("should render error for invalid submission", () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

// set description
test("should set decription on input change", () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value)
})

// set amount for alid input
test("should set valid amount", () => {
    const value = '100';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

// keep amount blank for invalid input
test("should not set invalid amount", () => {
    const value = 'money';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('amount')).toBe('')
})


// set note
test("should set note", () => {
    const value = 'a new note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

// call onSubmit using spies
test('should call onSubmit for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expense.description,
        amount: expense.amount,
        note: expense.note,
        createdAt: expense.createdAt
    });
})


// onDateChange
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
})

// onFocusChange
test("shoulde set calender focus on change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})