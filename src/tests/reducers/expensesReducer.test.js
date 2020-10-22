import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expenses';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { toMomentObject } from 'react-dates';


// defaults
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@INIT' })
    expect(state).toEqual([])
})

// add expense
test("should add expense", () => {
    const id =  uuidv4();

    const expense = {
        id, 
        description: 'a new expense',
        amount: 100,
        note: '',
        createdAt: moment(0).valueOf()
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    console.log(state)
    expect(state[3]).toEqual(expense)
})


// remove expense 
test("should remove expense", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    }

    const state = expensesReducer(expenses, action)
    expect(state.length).toBe(2)

})

test("should not remove expense for bad id", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '10'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// edit expense
test("should edit expense", () => {
    const updates = {amount:8675309}
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1', 
        updates
    }
     
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toBe(8675309)
})

test("should not edit expense for bad id", () => {
    const updates = {amount:8675309}
    const action = {
        type: 'EDIT_EXPENSE',
        id: '10', 
        updates
    }
     
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})