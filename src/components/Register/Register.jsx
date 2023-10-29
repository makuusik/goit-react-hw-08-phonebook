import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, RegisterForm } from './RegisterStyled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 201) {
        const token = response.data.token;

        localStorage.setItem('token', token);

        dispatch(loginSuccess(token));

        navigate('/contacts');

        localStorage.setItem('isLoggedIn', 'true');
      } else {
        setError(
          'Не удалось зарегистрировать пользователя. Попробуйте другой email и пароль.'
        );
      }
    } catch (error) {
      setError('Произошла ошибка при регистрации');
    }
  };

  return (
    <RegisterContainer>
      <h2>Регистрация</h2>
      <RegisterForm>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </RegisterForm>
      <RegisterForm>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </RegisterForm>
      <RegisterForm>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </RegisterForm>

      <button onClick={handleRegister}>Регистрация</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </RegisterContainer>
  );
};

export default Register;
