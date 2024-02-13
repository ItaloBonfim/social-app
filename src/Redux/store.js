import { configureStore } from '@reduxjs/toolkit' ;
import logger from "redux-logger";
//import  rootReducer from "../Redux/root-reducer";
import { persistedReducer } from './redux-persist';
import { persistStore } from 'redux-persist'

/* import perfilSlice from './user/perfil';
import loginSlice from './user/Login';
import logoutSlice from './user/Logout'; 

 const store = configureStore({ 
    reducer: {
        perfil: perfilSlice,
        login: loginSlice,
        logout: logoutSlice

    },
 });
 */

export const store = configureStore({ 
    //reducer: rootReducer,
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [logger],
     
 });

//export default store; 
export const persistor = persistStore(store)
