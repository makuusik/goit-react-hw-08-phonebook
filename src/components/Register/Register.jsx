import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom'; // Используем useNavigate вместо useHistory

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Используем useNavigate для перенаправления

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
        // Регистрация успешна, обрабатываем токен (по сути, это же как успешный вход)
        const token = response.data.token;

        // Здесь вы можете сохранить токен в хранилище (например, localStorage)
        localStorage.setItem('token', token);

        // Диспетчеризовать действие loginSuccess, чтобы отметить успешную регистрацию
        dispatch(loginSuccess());

        // Выполните переадресацию на страницу "Контакты"
        navigate('/contacts'); // Используем navigate для перенаправления

        console.log('Registration successful');
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
      {/* ... остальной код как в предыдущем ответе ... */}
    </div>
  );
};

export default Register;
