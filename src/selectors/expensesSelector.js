import moment from 'moment'

// get visible expenses
export default  (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        // const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        console.log('text: ', text)
        console.log('expense.description.toLowerCase(): ', expense.description.toLowerCase())
        console.log('text.toLowerCase(): ', text.toLowerCase())
        console.log('textMatch: ', textMatch)

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1
        }
    })
}