import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom'; // Используем useNavigate вместо useHistory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Используем useNavigate для перенаправления

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
        // Вход выполнен успешно, обрабатываем токен
        const token = response.data.token;

        // Здесь вы можете сохранить токен в хранилище (например, localStorage)
        localStorage.setItem('token', token);

        // Диспетчеризовать действие loginSuccess, чтобы отметить успешный вход
        dispatch(loginSuccess());

        // Выполните переадресацию на страницу "Контакты"
        navigate('/contacts'); // Используем navigate для перенаправления

        console.log('Login successful');
      } else {
        setError('Неверные email или пароль');
      }
    } catch (error) {
      setError('Произошла ошибка при входе');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      {/* ... остальной код как в предыдущем ответе ... */}
    </div>
  );
};

export default Login;
