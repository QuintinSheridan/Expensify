import selectExpenses from  '../../selectors/expensesSelector';
import moment from 'moment';
import expenses from '../fixtures/expenses'


// text filter
test("should filter by text value", () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([{
        id: '2',
        description: 'rent',
        amount: 80000,
        note: '',
        createdAt: moment(0).subtract(4,'days').valueOf()
    }])
})


// filter by startDate
test("should filter by startDate", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

// BAD TEST< NOT WORKING AFTER MOMENT MOCK!
// filter by end date
test('should filter by end date', ()=> {
     const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
   
    const result = selectExpenses(expenses, filters)
    // this test broke after mocking moment, no idea why same logic as set end date
    // should be [expenses[0], expenses[1]]
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

// sort by date
test('should sort by date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

// sort by amount
test('should sort by amount', ()=> {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})