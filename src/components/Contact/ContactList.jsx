import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/operations/operations';
import { ContactListContainer, ContactListUl } from './ContactListStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact &&
      contact.name &&
      contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  return (
    <ContactListContainer>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Ошибка: {error}</p>
      ) : (
        <ContactListUl>
          {filteredContacts && filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Удалить
                </button>
              </li>
            ))
          ) : (
            <p>Контакты не найдены</p>
          )}
        </ContactListUl>
      )}
    </ContactListContainer>
  );
};

export default ContactList;
