import styled from 'styled-components';

export const RegisterContainer = styled.div`
  font-size: 18px;
  margin: 20px 0;
`;

export const RegisterForm = styled.form`
  flex-direction: column;
  font-size: 16px;

  label {
    margin: 10px 0;
    weight: 200px;
  }

  input {
    font-size: 16px;
    padding: 5px;
  }

  button {
    font-size: 16px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
