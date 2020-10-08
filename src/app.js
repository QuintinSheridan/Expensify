import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import ExpenseDashboardPage from './components/ExpenseDashboardPage'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensesActions';
import { setTextFilter} from './actions/filtersActions';
import getVisibleExpenses from './selectors/expensesSelector'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { bindActionCreators } from 'redux';

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('visibleExpenses yo:')
    console.log(visibleExpenses)

});

// add expense
store.dispatch(addExpense({ description:'rent', amount:800}));
console.log(store.getState())

// add expense
store.dispatch(addExpense({ description:'food', amount:300}));
console.log(store.getState())

// add expense
store.dispatch(addExpense({ description:'gas', amount:500}));
console.log(store.getState())

// set text filter
store.dispatch(setTextFilter("ent"))
console.log(store.getState())

const jsx = (
    <Provider store={store}> 
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
