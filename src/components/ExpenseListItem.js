// Export a stateless functional component

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3> {description} </h3>
        <p> {amount} - {createdAt}</p>
    </Link>

    </div>
)

export default ExpenseListItem;