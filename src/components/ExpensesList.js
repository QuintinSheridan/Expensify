import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListenItem';
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} id= {expense.id} {...expense} />
            )
        })}
    </div>
)

const mapStateToProps = (state) => (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);
