import React from 'react';
import { ExpenseList} from '../../components/ExpensesList';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

// with expenses
test("should render ExpenseList with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// with no expenses
test("should render ExpenseList with no expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})