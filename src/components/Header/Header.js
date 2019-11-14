import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="is-active-link">Expenses list</NavLink>
          </li>
          <li>
            <NavLink to="/add-expense" exact activeClassName="is-active-link">Add expense</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;