import { CREATE_TASK, GET_TASK } from "../constants/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state };
    case GET_TASK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
