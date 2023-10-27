import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  margin: 20px 0;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

export const ContactInput = styled.input`
  font-size: 16px;
  margin: 5px 0;
  padding: 5px;
`;

export const ContactButton = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
