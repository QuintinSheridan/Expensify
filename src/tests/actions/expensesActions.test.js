import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    editExpense,
    startEditExpense, 
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses
 } from '../../actions/expensesActions';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

// add test data to database before each test
beforeEach((done) => {
    const expensesData ={};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref('expenses').set(expensesData).then(() => done());
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

test("should edit expense in firebase and in store", (done) => {
    const store = createMockStore({});
    const updates = {
        description: 'updated descripition',
        amount: 987654321
    } 
    const id = expenses[1].id;

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });

        return database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual({
                createdAt: expenses[1].createdAt,
                note: expenses[1].note,
                ...updates
            });
            done();
        });
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

// set Expenses
test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

// get expenses from firebase
test('should fetch the expenses from firebase', (done) => {
     const store = createMockStore({});
     store.dispatch(startSetExpenses()).then(() => {
         const actions = store.getActions();
         expect(actions[0]).toEqual({
             type: 'SET_EXPENSES',
             expenses
         })
         done();
     })
})

// removeExpense
test('should set up remove expense action object', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');     
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});


// testing testing
test('async dummy test', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };

    return store.dispatch(startAddExpense(expenseData))
        .then(() => {
            expect(1).toBe(1);
            done();
        });
})

//adding expenses to store and database
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

// test('should add expense with defaults to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: '',
//         amount: 0, 
//         note: '',
//         createdAt: 0
//     };

//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });

//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//         }).then((snapshot) => {
//             expect( snapshot.val()).toEqual(expenseData);
//             done();
//     });
// });



test("should create add action with defaults", () => {
     const expenseDefaults = {
        description:'', 
        note:'', 
        amount:0, 
        createdAt:0
     };

     const defaultAction = addExpense();

     expect(defaultAction).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
            ...expenseDefaults, 
            id: expect.any(String)
         }
    })
})