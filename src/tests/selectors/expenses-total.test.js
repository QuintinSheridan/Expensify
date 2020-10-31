import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

const expenseTotal = 1101.95;
const singleExpense = expenses[0].amount/100;

test("should calculate total of all expenses", () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(expenseTotal);
})

test("should return 0 for no expenses"), () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
}

test("should return single expense value"), () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(singleExpense);
}


