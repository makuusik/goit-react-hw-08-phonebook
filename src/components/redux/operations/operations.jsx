import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const getToken = () => {
  return localStorage.getItem('token');
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const token = getToken();
    const response = await fetch(
      'https://connections-api.herokuapp.com/contacts',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Ошибка');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const token = getToken();
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        newContact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const token = getToken();
      const response = await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return contactId;
      } else {
        throw new Error('Ошибка в удалении контакта');
      }
    } catch (error) {
      throw error;
    }
  }
);

export const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
