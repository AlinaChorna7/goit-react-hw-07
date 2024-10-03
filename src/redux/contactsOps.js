import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

const BASE_URL = 'https://66fe70ae2b9aac9c997bf43f.mockapi.io/contacts';


 export const fetchContacts = createAsyncThunk(
'contacts/fetchAll',
async (_,thunkApi)=>{
    try {
        const response = await axios.get(BASE_URL)
        return response.data
    } catch (error) {
 return thunkApi.rejectWithValue(error.message);
    }
}
 )
 export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(newContact, thunkApi)=>{
        try {
            const response = await axios.post(BASE_URL, newContact);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
 )

 export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId, thunkApi)=>{
        try {
            await axios.delete(`${BASE_URL}/${contactId}`);
            return contactId;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
 )