import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginSuccess, logout } from '../redux/userSlice';

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
    <div>
      {user.isLoggedIn ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Выход из аккаунта</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
