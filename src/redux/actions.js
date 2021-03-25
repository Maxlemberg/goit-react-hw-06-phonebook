import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsSucces = createAction('phonebook/fetchContactsSucces');
const fetchContactsFeilure = createAction('phonebook/fetchContactsFeilure');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSucces = createAction('contacts/addContactSucces');
const addContactsFeilure = createAction('contacts/addContactsFeilure');

// const deleteContacts = createAction('phonebook/Delete');
const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSucces = createAction('contacts/deleteContactSucces');
const deleteContactsFeilure = createAction('contacts/deleteContactsFeilure');

const filtredContacts = createAction('phonebook/Filter');

export {
  addContactRequest,
  addContactSucces,
  addContactsFeilure,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactsFeilure,
  filtredContacts,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsFeilure,
};
