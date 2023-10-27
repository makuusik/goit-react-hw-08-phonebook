import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginSuccess, logout } from '../redux/userSlice';
import {
  AuthLinks,
  LogoutButton,
  UserInfo,
  UserMenuContainer,
} from './UserMenuStyled';

const UserMenu = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      dispatch(loginSuccess());
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <UserMenuContainer>
      {user.isLoggedIn ? (
        <div>
          <UserInfo>{user.email}</UserInfo>
          <LogoutButton onClick={handleLogout}>Выход из аккаунта</LogoutButton>
        </div>
      ) : (
        <AuthLinks>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </AuthLinks>
      )}
    </UserMenuContainer>
  );
};

export default UserMenu;
