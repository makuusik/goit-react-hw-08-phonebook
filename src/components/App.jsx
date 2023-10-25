import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './Contact/ContactForm';
import ContactList from './Contact/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
