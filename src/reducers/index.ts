import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import stream from "./stream";

export default combineReducers({
    auth: auth,
    form: formReducer,
    stream
})