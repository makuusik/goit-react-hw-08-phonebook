import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

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

        dispatch(loginSuccess());

        navigate('/contacts');

        console.log('Registration successful');
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
    <div>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Регистрация</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
