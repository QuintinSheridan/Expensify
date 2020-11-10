import authReducer from '../../reducers/authREducer';

const uid = '123'

test('should correctly handle login and set uid', () => {
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);
    expect(state).toEqual({
        uid
    });
});

test('should correctly handle logout and remove uid', () => {
    const initialState = {
        uid
    };

    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer(initialState, action);
    expect(state).toEqual({});
});