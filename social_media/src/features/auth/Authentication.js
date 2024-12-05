import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'Authentication',
    initialState: {
        username: 'neeraj'
    },
    reducers: {
        resetForm: () => {

        },
        logout: () => {

        }
    }
})

export default authSlice.reducer;
