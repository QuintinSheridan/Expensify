import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;