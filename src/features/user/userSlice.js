import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
    },
    reducers: {
        setUsername: (state, action) => {
            console.log("awdasdawdasd")
            state.username = action.payload;
        },
    },
});

export const { setUsername } = userSlice.actions;

export const setUsernameAsync = (name) => (dispatch) => {
    setTimeout(() => {
        dispatch(setUsername(name));
    }, 1000);
};

export const selectUsername = (state) => state.user.username;

export default userSlice.reducer;
