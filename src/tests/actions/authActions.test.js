import { login, logout } from '../../actions/authActions';

const uid = '123';

// login
test("should create login action object", () => {
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

// logout
test("should create logout action object", () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});