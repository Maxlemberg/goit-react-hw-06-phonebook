import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('phonebook/Add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContacts = createAction('phonebook/Delete');

const filtredContacts = createAction('phonebook/Filter');

export { addContacts, deleteContacts, filtredContacts };
