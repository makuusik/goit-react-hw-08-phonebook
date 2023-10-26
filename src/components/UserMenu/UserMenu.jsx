import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
