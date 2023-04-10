import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    redusers: {
        filterContacts: (state, { payload }) => {
            state.filter = payload;
        },
    }
});

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;