import {
  CREATE_TASK,
  GET_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "../constants/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state };
    case GET_TASK:
      return { ...state, ...action.payload };
    case EDIT_TASK:
      return { ...state, ...action.payload };
    case DELETE_TASK:
      return {};
    default:
      return state;
  }
};
