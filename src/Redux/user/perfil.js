import { createAction, createReducer } from '@reduxjs/toolkit'


export const resumePerfil = createAction('user/resume')

const initialState = {
    activate: true,
};

const perfilSlice = createReducer(initialState, (builder) => {
    builder
        .addCase(resumePerfil, (state, action) => {
            state.activate = action.payload;
            console.log(state.activate)
        })

        .addDefaultCase((state, action) => { });
})

export default perfilSlice;