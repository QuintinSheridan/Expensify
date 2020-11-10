import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';

const printClicked = () => {
   console.log('FFS');
}

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/dashboard' exact={true} activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Dashboard </NavLink>
        <NavLink to='/create' activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Create </NavLink>
        <NavLink to='/help' activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Help </NavLink>
          <button onClick={props.startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);