import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />)
});

// render with default
test("should render expense list filters correctly", () => {
    expect(wrapper).toMatchSnapshot();
})


// render with alt
test("should set alt filters", () => {
    // use enzyme to set comonent props
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
});

// change text
test("should handle text filter change", () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: 'rent'
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('rent')
})

// sortByDate
test("should sort by date", () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

//sortByAmount
test("should sort by  amount", () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

// setStartDate
test("should ", () => {
    
})

// setEndDate setEndDate
test("should set date range", () => {
    const startDate = moment(0).add(3, 'days');
    const endDate = moment(0).add(5, 'days');
    wrapper.find(DateRangePicker).prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

// date focus change
test("should change date focus ", () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})



