import { createAction, createReducer } from "@reduxjs/toolkit";

export const DataUserLogout = createAction('user/logout');

const initialState = {
    currentUser: null
}

const logoutSlice = createReducer(initialState, (builder) => {
    builder
    .addCase(DataUserLogout, (state, action) =>{
        state.email = action.payload;
    })

    .addDefaultCase((state, action) => {});
})

export default logoutSlice;
