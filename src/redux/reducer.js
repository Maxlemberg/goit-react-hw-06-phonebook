// import { ADD, DELETE, CHANGE_FILTER } from './types';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  deleteContactSucces,
  deleteContactRequest,
  deleteContactsFeilure,
  filtredContacts,
  addContactRequest,
  addContactSucces,
  addContactsFeilure,
  fetchContactsFeilure,
  fetchContactsSucces,
  fetchContactsRequest,
} from './actions';

const contacts = createReducer([], {
  [fetchContactsSucces]: (_, { payload }) => payload,
  [addContactSucces]: (state, { payload }) => [...state, payload],
  [deleteContactSucces]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
  [fetchContactsFeilure]: () => false,
  [addContactRequest]: () => true,
  [addContactSucces]: () => false,
  [addContactsFeilure]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSucces]: () => false,
  [deleteContactsFeilure]: () => false,
});

const filter = createReducer('', {
  [filtredContacts]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter, loading });
