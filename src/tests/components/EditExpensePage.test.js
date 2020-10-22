import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';


let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            history={history} 
            expense={expenses[0]}
        />
    );
})

// render form with data
test("should render expense form with data",  () => {
    expect(wrapper).toMatchSnapshot()
});

// submit form
test("should update expense onSubmit", () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

// remove expense
test("should remove expense item", () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(
        {id: expenses[0].id}
    )
});
