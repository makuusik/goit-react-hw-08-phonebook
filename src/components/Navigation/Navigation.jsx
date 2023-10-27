import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationContainer } from './NavigationStyled';

const Navigation = () => {
  return (
    <nav>
      <NavigationContainer>
        <li>
          <Link to="/register">Регистрация</Link>
        </li>
        <li>
          <Link to="/login">Вход</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </NavigationContainer>
    </nav>
  );
};

export default Navigation;
