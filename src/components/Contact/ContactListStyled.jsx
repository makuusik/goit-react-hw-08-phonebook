import styled from 'styled-components';

export const ContactListContainer = styled.div`
  font-size: 18px;
  margin: 20px 0;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    margin: 10px 0;

    button {
      font-size: 16px;
      padding: 5px 10px;
      background-color: #dc3545;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #c82333;
      }
    }
  }
`;

export const ContactListUl = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    button {
      font-size: 16px;
      padding: 5px 10px;
      background-color: #ff3b30;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #c30000;
      }
    }
  }
`;
