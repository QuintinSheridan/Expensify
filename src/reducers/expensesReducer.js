import database from '../firebase/firebase';
// Expenses reducer
const expensesReducerDefaultState = []


export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                        };
                    } else{
                        return expense;
                    };   
            });
        case 'SET_EXPENSES':
            return action.expenses
        case 'START_SET_EXPENSES':
            const storedExpenses = [];
            database.ref( 'expenses')
                .once('value')
                .then((snapshot)=>{
                    snapshot.forEach(childSnapshot => {
                        storedExpenses.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        });
                    });
                return storedExpenses;
                });
        default:
            return state;
    };
};

// database.ref('expenses').on('value', () => {
    // database.ref( 'expenses')
    // .once('value')
    // .then((snapshot)=>{
    //     const deezExpenses = [];
    //     snapshot.forEach(childSnapshot => {
    //         deezExpenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });
//         console.log(deezExpenses)
//     })
// });