import React from 'react'
import {NavLink} from 'react-router-dom'


const Nav = ({children, routeName}) => (
    <NavLink activeClassName='active' className='menu-link' exact to={routeName}>
      {children}
    </NavLink>
)


const Navbar = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <h3 className='title'>Fideligard Historical Stock Portfolio Simulator</h3>
      </div>
      <div className="top-bar-right">
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
    </div>
  </div>
)

export default Navbar
