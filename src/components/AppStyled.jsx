import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const AppTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 20px;
    font-size: 18px;

    a {
      text-decoration: none;
      color: #007bff;
      transition: color 0.2s;

      &:hover {
        color: #0056b3;
      }
    }
  }
`;
