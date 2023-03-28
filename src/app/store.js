import { configureStore } from '@reduxjs/toolkit';
import contactsFilter from './slice';

export const store = configureStore({
  reducer: contactsFilter,
});
