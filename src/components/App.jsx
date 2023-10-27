import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './Register/Register';
import Login from './Login/Login';
import ContactList from './Contact/ContactList';
import ContactForm from './Contact/ContactForm';
import Filter from './Filter/Filter';
import UserMenu from './UserMenu/UserMenu';
import { AppContainer, Nav, AppTitle } from './AppStyled';

const App = () => {
  const user = useSelector(state => state.user);

  return (
    <AppContainer>
      <Router>
        {/* basename="/goit-react-hw-08-phonebook" */}

        <AppTitle>Книга контактов</AppTitle>
        <Nav>
          <ul>
            <UserMenu />
            {user.isLoggedIn && (
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            )}
          </ul>
        </Nav>

        <Routes>
          {user.isLoggedIn ? (
            <>
              <Route
                path="/contacts"
                element={
                  <AppContainer>
                    <ContactForm />
                    <ContactList />
                    <Filter />
                  </AppContainer>
                }
              />

              <Route path="/login" element={<Navigate to="/contacts" />} />
              <Route path="/register" element={<Navigate to="/contacts" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
