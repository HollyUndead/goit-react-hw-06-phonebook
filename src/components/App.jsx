/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext } from 'react';
import { useSelector } from 'react-redux';

import { ContactItem } from './contacts-item/contactItem';
import { FormCreateContact } from './form/form';
import { Filter } from './filter/filter';

export const StateContext = createContext();

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
                phone={el.phone}
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
