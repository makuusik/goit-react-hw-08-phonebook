import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const UserInfo = styled.div`
  margin-right: 20px;
`;

export const LogoutButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

export const AuthLinks = styled.div`
  a {
    text-decoration: none;
    color: #007bff;
    margin-right: 10px;
    font-size: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
