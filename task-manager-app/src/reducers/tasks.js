import { CREATE_TASK } from "../constants/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
