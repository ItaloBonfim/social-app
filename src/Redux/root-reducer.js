import { combineReducers } from 'redux';

import userReducer from "./user/slice";
import publicationReducer from "./publication/slice";
import dialogReducer from "./dialog/slice";

const rootReducer = combineReducers({
    userReducer,
    publicationReducer,
    dialogReducer,
});

export default rootReducer;