import { createSelector } from 'reselect';

const getLoading = state => state.todos.loading;
const getContacts = state => state.todos.contacts;
const getFilter = state => state.todos.filter;

// const getVisibleContacts = state => {
//   // console.log('Рендер контактів');
//   const lowerName = getFilter(state).toLowerCase();
//   const arr = getContacts(state).filter(item =>
//     item.name.toLowerCase().includes(lowerName),
//   );
//   return arr;
// };

const getVisibleContacts = createSelector(
  getFilter,
  getContacts,
  (filter, contacts) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export { getLoading, getContacts, getFilter, getVisibleContacts };
