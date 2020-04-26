import { REGISTER, LOGIN, LOGOUT } from "../constants/constants";
const initialState = { isAuthed: false };
export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.payload.token };
    case LOGIN:
      return { ...state, ...action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
