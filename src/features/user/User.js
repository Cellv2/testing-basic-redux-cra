import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, selectUsername } from "./userSlice";

const User = () => {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();

    const setName = () => {
        console.log("setName fired!");
        dispatch(setUsername("Barry scott here"));
    };

    return (
        <div>
            <p>User Component</p>
            <p>The username is {username}</p>
            <input
                type="text"
                onChange={(event) => dispatch(setUsername(event.target.value))}
            />
            <button onClick={setName}>Who are you?</button>
        </div>
    );
};

export default User;
