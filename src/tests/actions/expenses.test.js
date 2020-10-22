import { addExpense, editExpense, removeExpense } from '../../actions/expensesActions';

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
    const testExpense = {
        description: 'test expense',
        amount:200,
        createdAt:1000,
        note: 'heres a note'
    }

    const action = addExpense(testExpense);
    
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...testExpense,
            id: expect.any(String)
        }
    });
});

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