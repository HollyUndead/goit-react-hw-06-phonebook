import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'contactsFilter',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, ...action.payload];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContacts: (state, action) => {
      /* eslint-disable-next-line */
      state.contacts = state.contacts.filter(el => {
        if (el.id !== action.payload.value) {
          return el;
        }
      });
    },
    undefined: () => {
      console.log('undefinde123123123');
      return;
    },
  },
});

export const { addContacts, setFilter, deleteContacts } = stateSlice.actions;

export default stateSlice.reducer;
