import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expensesActions';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// removeExpense
test('should set up remove expense action object', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//editExpense
test("should setup edit expense object", () => {
    const action  = editExpense("123abc", {amount: 200, description:"new description", note:"new note"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {amount: 200, description:"new description", note:"new note"}
    });
});

// addExpense
test("should create add action with values", () => {
    const action = addExpense(expenses[0]);
    
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[0]
    });
});

// adding expenses to store and database
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'hat',
        amount: 2000, 
        note: 'new hat',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect( snapshot.val()).toEqual(expenseData);
            done();
    });
});


test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0, 
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect( snapshot.val()).toEqual(expenseData);
            done();
    });
});



// test("should create add action with defaults", () => {
//      const expenseDefaults = {
//         description:'', 
//         note:'', 
//         amount:0, 
//         createdAt:0
//      };

//      const defaultAction = addExpense();

//      expect(defaultAction).toEqual({
//          type: 'ADD_EXPENSE',
//          expense: {
//             ...expenseDefaults, 
//             id: expect.any(String)
//          }
//     })
// })