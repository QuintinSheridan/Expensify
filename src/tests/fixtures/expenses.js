import moment from 'moment';

// test data
export default [{
    id: '1',
    description: 'Gum',
    amount: 195,
    note: '',
    createdAt: moment(0).valueOf()
},
{
    id: '2',
    description: 'rent',
    amount: 80000,
    note: '',
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'food',
    amount: 30000,
    note: '',
    createdAt: moment(0).add(4,'days').valueOf()
}]


















