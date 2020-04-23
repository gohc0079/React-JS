import {
  CREATE_TASK,
  GET_TASK,
  EDIT_TASK,
  DELETE_TASK,
  GET_TASKS,
} from "../constants/constants";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case CREATE_TASK:
      return { ...state };
    case GET_TASK:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_TASK:
      return { ...state, ...action.payload };
    case DELETE_TASK:
      return {};
    default:
      return state;
  }
};
