import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/Authentication";
export const store = configureStore({
    reducer : {
        auth: authSlice,
    }
})