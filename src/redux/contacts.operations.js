import axios from 'axios';
import {
  addContactRequest,
  addContactsFeilure,
  addContactSucces,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactsFeilure,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsFeilure,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const res = await axios.get('/contacts');
    dispatch(fetchContactsSucces(res.data));
  } catch (error) {
    dispatch(fetchContactsFeilure(error));
  }
};

const addContacts = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());
  try {
    const res = await axios.post('/contacts', contact);
    // console.log(res);
    dispatch(addContactSucces(res.data));
  } catch (error) {
    dispatch(addContactsFeilure(error));
  }
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  // const strId = id.toString();
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSucces(id)))
    .catch(error => dispatch(deleteContactsFeilure(error)));
};

export { addContacts, deleteContact, fetchContacts };
