import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '435-24-67' }
    ]
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.contacts.push(payload);
        },
        deleteContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(({ id }) => id !== payload);
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;