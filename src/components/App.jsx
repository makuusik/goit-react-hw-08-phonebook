import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import ContactList from './Contact/ContactList';
import ContactForm from './Contact/ContactForm';
import Filter from './Filter/Filter';
import UserMenu from './UserMenu/UserMenu';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Phonebook</h1>
        <nav>
          <ul>
            <UserMenu />
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </Router>
  );
};

export default App;
