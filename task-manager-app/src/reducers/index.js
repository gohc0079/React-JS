import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import user from "./users";

export default combineReducers({
  form: formReducer,
  user,
});
