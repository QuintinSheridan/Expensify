import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// component calls action generator 
// action generator returns function
// conponent dispatches function 
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense)  => ({
        type: 'ADD_EXPENSE',
        expense
    });

// update data in firebase and add expense to redux store
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description='', 
            note='', 
            amount=0, 
            createdAt=0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            // update redux store
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense= (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});