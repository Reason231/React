import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/auth.reducer";

const store=configureStore({
    // reducer are those configuration/code which contains all tte state and the manipluation of state
    reducer: {
        auth:authReducer
    }
})

export default store