import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: ['contacts/fetchContacts/fulfilled'],
            }
        })
});
