export default (expenses) => {
    if(expenses.length===0) {
        return 0;
    } else {
        const total = expenses.reduce((acc, expense)  => {
            return acc+(expense.amount/100);
        }, 0)
        console.log(total)
        return total;
    }
}