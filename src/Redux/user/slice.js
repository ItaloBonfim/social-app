import { createSlice } from '@reduxjs/toolkit';
import { AddItemStorage, FindItemStorage } from '../../services/SessionStorage'

/*
ToDo
*** COMPLICATED, Learn about redux thunk in redux Toolkit!
*/

// redux thunk https://www.youtube.com/watch?v=93CR_yURoII / por padrão ele já vem com a lib redux-toolkit, mas precisa enteder como usar, este exemplo é bastante acima

const initialState = {
    loading: false,
    currentUser: null,
    isAuth: false,
    error: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //actions
        doLogin: (state, action) => {
            state.currentUser = action.payload;

            const sessionConfig = {
                key: "CurrentUser",
                data: action.payload
            }

            if (FindItemStorage("Token")) {
                state.isAuth = true;
                AddItemStorage(sessionConfig);
                console.log(state.currentUser)

            }
        },

        doLogout: (state) => {
            state.currentUser = null;
            state.isAuth = false;
        },

        checkCredencials: (state) => {

            if (state.isAuth) {
                state.currentUser = FindItemStorage('CurrentUser');
            } else {
                state.currentUser = null;
                state.isAuth = false;
            }
        },
    },
    extraReducers: (builder) => { }
})

export const {
    doLogin,
    doLogout,
    checkCredencials,

} = userSlice.actions

export default userSlice.reducer