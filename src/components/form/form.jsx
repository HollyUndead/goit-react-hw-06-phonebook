import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { addContacts } from 'app/slice';
import './fomr.css';

export const FormCreateContact = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const addNewContact = ev => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const number = ev.target.number.value;
    const names = state.contacts.filter(el => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
    const numbers = state.contacts.filter(el => {
      return Number(el.number) === Number(number);
    });
    if (names.length !== 0) {
      alert(`${name} is already in contacts`);
      return;
    } else if (numbers.length !== 0) {
      alert(`${number} is already in contacts`);
      return;
    } else {
      dispatch(addContacts([{ name, phone: number, id: nanoid() }]));
    }
    ev.target.reset();
  };

  return (
    <form onSubmit={addNewContact} className="form-contact">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className="create-contact">
        Add contact
      </button>
    </form>
  );
};
