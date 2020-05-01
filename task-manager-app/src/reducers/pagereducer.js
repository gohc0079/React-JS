import {
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  RESET,
  SET_PAGE,
} from "../constants/constants";
export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      const { length, itemsPerPage } = action.payload;
      return state + 1 < Math.ceil(length / itemsPerPage) ? state + 1 : state;
    case DECREMENT_PAGE:
      console.log(action.type);
      return state - 1 < 0 ? state : state - 1;
    case RESET:
      return 0;
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
};
