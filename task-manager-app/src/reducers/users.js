import { REGISTER, LOGIN, LOGOUT } from "../constants/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.payload.token };
    case LOGIN:
      return { ...state, user: action.payload.token };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
