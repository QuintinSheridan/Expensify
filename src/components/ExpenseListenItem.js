// Export a stateless functional component

import React from 'react';
import { removeExpense } from '../actions/expensesActions'
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3> {description} </h3>
        <p> {amount} - {createdAt}</p>
        <button onClick={() => {
            console.log('hello')
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);