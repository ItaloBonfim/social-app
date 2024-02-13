import { createAction, createReducer } from "@reduxjs/toolkit";

export const DataUserLogin = createAction('user/login');

const initialState = {
    currentUser: null
}

const loginSlice = createReducer(initialState, (builder) => {
    builder
    .addCase(DataUserLogin, (state, action) =>{
        state.email = action.payload;
    })

    .addDefaultCase((state, action) => {});
})

export default loginSlice;
