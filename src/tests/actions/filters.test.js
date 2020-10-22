import moment from 'moment';
import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate } from '../../actions/filtersActions';


// setStartDate
test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date:moment(0)
    })
})

// setEndDate
test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date:moment(0)
    })
})

// sortByAmount
test("should return sort by amount action", () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

// sortByDate
test("should return sort by date action", () => {
    const action = sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

// setTextFilter
test("should return action for text filter with value", () => {
    const action = setTextFilter("rent")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'rent'
    })
})

test("should return action for text filter with defaults", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:  "SET_TEXT_FILTER",
        text:""
    })
})