import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginForm } from './LoginStyled';

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

        localStorage.setItem('isLoggedIn', 'true');

        navigate('/contacts');
      } else {
        setError('Неверные email или пароль');
      }
    } catch (error) {
      console.error(error);
      setError('Произошла ошибка при входе');
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </LoginForm>
      <LoginForm>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </LoginForm>

      <button onClick={handleLogin}>Вход</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </LoginContainer>
  );
};

export default Login;
