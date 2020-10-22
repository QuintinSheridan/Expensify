import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filtersActions';

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };

    onSortChange = (e)=> {
        console.log(e.target.value);
        if(e.target.value === "amount") {
            this.props.sortByAmount()
        }
        else if (e.target.value === "date") {
            this.props.sortByDate()
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />

                <select 
                    onChange={this.onSortChange}
                    value={this.props.filters.sortBy}
                >
                    <option value="date" default>Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }

}

// startDateId={"dwjkhqkehwqjkeq"}
// endDateId={"cxzvcxbzbczxbz"}


// const ExpenseListFilters = (props) => (
//     <div>
//         <input type="text" value={props.filters.text} onChange={(e)=> {
//             console.log(e.target.value);
//             props.dispatch(setTextFilter(e.target.value));
//         }}/>

//         <select onChange={(e)=> {
//             console.log(e.target.value);
//             if(e.target.value === "amount") {
//                 props.dispatch(sortByAmount())
//             }
//             else if (e.target.value === "date") {
//                 props.dispatch(sortByDate())
//             }
//         }}>

//             <option value="date" default>Date</option>
//             <option value="amount">Amount</option>
//         </select>

//         <DateRangePicker
//                     startDate={this.props.filters.startDate}
//                     endDate={this.props.filters.endDate}
//                     onDatesChange={this.onDatesChange}
//                     focusedInput={this.state.calenderFocused}
//                     onFocusChange={this.onFocusChange}
//                     numberOfMonths={1}
//                     isOutsideRange={() => false}
//                     showClearDates={true}
//                 />
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

