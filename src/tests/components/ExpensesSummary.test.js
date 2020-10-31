import { EnzymeAdapter } from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render single expense summary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1495} />)
    expect(wrapper).toMatchSnapshot()
});

test('should render summary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={3250} />)
    expect(wrapper).toMatchSnapshot()
});

