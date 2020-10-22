import { createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expensesReducer'
import filtersReducer from '../reducers/filtersReducer'


// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
export default () => {
    // Store creation
    const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters:filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

