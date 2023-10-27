import styled from 'styled-components';

export const NavigationContainer = styled.nav`
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
