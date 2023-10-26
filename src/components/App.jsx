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

const App = () => {
  const user = useSelector(state => state.user);

  return (
    <Router>
      <div>
        <h1>Книга контактов</h1>
        <nav>
          <ul>
            <UserMenu />
            {user.isLoggedIn && (
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <Routes>
        {user.isLoggedIn ? (
          <>
            <Route
              path="/contacts"
              element={
                <div>
                  <ContactForm />
                  <ContactList />
                  <Filter />
                </div>
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
  );
};

export default App;
