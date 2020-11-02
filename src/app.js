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
import 'react-dates/lib/css/_datepicker.css';
import { bindActionCreators } from 'redux';
import './firebase/firebase';
//import './playground/promises';

const store = configureStore()

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

});

// add expense
store.dispatch(addExpense({ description:'rent', amount:800}));

// add expense
store.dispatch(addExpense({ description:'food', amount:300}));

// add expense
store.dispatch(addExpense({ description:'gas', amount:500}));

// set text filter
store.dispatch(setTextFilter("ent"))

const jsx = (
    <Provider store={store}> 
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
