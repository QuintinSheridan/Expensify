import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';


// default filter
test("should set up default filter values", () => {
    // default values
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '', 
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

// sort by amount
test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" })
    expect(state).toEqual({
        text: '', 
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})


// sort by date
test("should set sortBy to date", () => {
    const previousState = {
        text: '', 
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(previousState, {type: 'SORT_BY_DATE'})
    expect(state).toEqual({
        text: '', 
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

//  SET_TEXT_FILTER
test("should set text filter" , ()=> {
    const state = filtersReducer(undefined, 
        {
            type: 'SET_TEXT_FILTER',
            text: 'rent'
        })
    expect(state.text).toBe('rent')
})


// SET_START_DATE
test("should set startDate", () => {
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date: moment(0)
    })
    expect(state.startDate).toEqual(moment(0))
})

// SET_END_DATE
test("should set endDate", () => {
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date: moment(0)
    })
    expect(state.endDate).toEqual(moment(0))
})

