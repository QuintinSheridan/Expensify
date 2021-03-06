import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;