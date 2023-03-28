/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from './contacts/contactItem';
import { FormCreateContact } from './form/form';
import { Filter } from './filter/filter';
import { addContacts } from 'app/slice';
import './contacts/contacts.css';

export const StateContext = createContext();

export const transformNumber = number => {
  let numberArr = number.split('');
  return `${numberArr.slice(0, 3).join('')}-${numberArr
    .slice(3, 5)
    .join('')}-${numberArr.slice(5, 7).join('')}`;
};

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('contacts'));
    if (local !== null) {
      dispatch(addContacts(local.contacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify({ contacts: contacts }));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <FormCreateContact />
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {contacts.map(el => {
          const name = el.name.toLowerCase();
          if (name.includes(filter)) {
            return (
              <ContactItem
                name={el.name}
                number={el.number}
                elementId={el.id}
                key={el.id}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};
