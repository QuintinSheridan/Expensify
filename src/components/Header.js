import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' exact={true} activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Home </NavLink>
        <NavLink to='/create' activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Create </NavLink>
        <NavLink to='/help' activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> Help </NavLink>
    </header>
);


export default Header;