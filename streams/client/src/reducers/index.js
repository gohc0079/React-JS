import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
//the key of the reducer object for redux-form library has to be form
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
