import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage
};

const persistedReduser = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
    reducer: {
        contacts: persistedReduser,
        filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
});

export const persistor = persistStore(store);