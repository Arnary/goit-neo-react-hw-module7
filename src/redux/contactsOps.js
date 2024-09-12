import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e1efdac831c8811b56c592.mockapi.io/";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, ThunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, ThunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', newContact);
        return data;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, ThunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
    }
});
