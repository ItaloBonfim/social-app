import { configureStore } from "@reduxjs/toolkit"; 
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./root-reducer";
import storage from "redux-persist/lib/storage";

//https://www.youtube.com/watch?v=kX8VWBB_DNM
//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
//https://www.microverse.org/blog/how-to-get-set-up-with-react-redux-in-your-next-multi-page-project

const persistConfig = {
    key: 'Root',
    storage,
    blocklist: ['publication', 'dialog']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);

