import { createSelector, createSlice} from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
         })
        .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.items = payload;
            state.loading = false;
         })
        .addCase(fetchContacts.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
         })
        .addCase(addContact.fulfilled, (state, { payload }) => {
            state.items.push(payload);
            state.loading = false;
         })
        .addCase(addContact.rejected, (state) => {
            state.error = true;
            state.loading = false;
         })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
         })
        .addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.items = state.items.filter((el) => el.id !== payload.id)
            state.loading = false;
         })
        .addCase(deleteContact.rejected, (state) => {
            state.error = true;
            state.loading = false;
         })
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    switch (filterName) {
        case filterName:
            return contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
        default:
            return contacts;
    }
});
