import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;

        localStorage.setItem('token', token);

        dispatch(loginSuccess());

        navigate('/contacts');

        console.log('Успешный вход');
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        setError('Неверные email или пароль');
      }
    } catch (error) {
      setError('Произошла ошибка при входе');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Вход</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
