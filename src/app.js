import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expensesActions';
import { login, logout} from './actions/authActions';
import getVisibleExpenses from './selectors/expensesSelector'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { bindActionCreators } from 'redux';
import { firebase } from './firebase/firebase';

//import './playground/promises';

const store = configureStore()

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

});

// // add expense
// store.dispatch(addExpense({ description:'rent', amount:800}));

// // add expense
// store.dispatch(addExpense({ description:'food', amount:300}));

// // add expense
// store.dispatch(addExpense({ description:'gas', amount:500}));

// // set text filter
// store.dispatch(setTextFilter("ent"))

const jsx = (
    <Provider store={store}> 
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('user id: ', user.uid)
        console.log('log in');
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        console.log('log out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    };
});

  