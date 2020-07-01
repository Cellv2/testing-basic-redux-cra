import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    devTools: composeWithDevTools()
});
