import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
            <li className='navbar-item'>
                <NavLink to="/" className="navbar-link">About</NavLink>
            </li>
      </ul>
    </nav>
  )
}

export default Navbar
