import React from 'react'
import {NavLink} from 'react-router-dom'


const Nav = ({children, routeName}) => (
    <NavLink activeClassName='active' className='menu-link' exact to={routeName}>
      {children}
    </NavLink>
)


const Navbar = () => (
    <div className="minor-navbar">
      <ul className="vertical medium-horizontal menu">
        <li>
          <Nav routeName='/trade'>Trade</Nav>
        </li>
        <li>
          <Nav routeName='/transactions'>Transactions</Nav>
        </li>
        <li>
          <Nav routeName='/portfolio'>Portfolio</Nav>
        </li>
      </ul>
    </div>
)

export default Navbar
