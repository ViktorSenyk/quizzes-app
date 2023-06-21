import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <h2 className="header__logo">
        <Link to="/">Quizzes</Link>
      </h2>
      <nav className="header__navigation navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/">Quizzes list</Link>
          </li>
          <li className="navigation__item">
            <Link to="/statistic">Statistic</Link>
          </li>
          <li className="navigation__item_mobile">
            <Link to="/statistic">Statistic</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
