import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Регистрация</Link>
        </li>
        <li>
          <Link to="/login">Вход</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
