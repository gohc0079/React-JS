import api from "../api";
import { REGISTER, LOGIN, LOGOUT } from "../constants/constants";
import history from "../history";

export const createUser = (formValues) => async (dispatch, getState) => {
  const response = await api.post("/users", { ...formValues });

  dispatch({ type: REGISTER, payload: response.data });
  const { user } = getState();
  if (user) {
    history.push("/");
  }
};
export const UserLogin = (formValues) => async (dispatch, getState) => {
  const response = await api.post("/users/login", { ...formValues });

  dispatch({ type: LOGIN, payload: response.data });
  const { user } = getState();
  if (user) {
    history.push("/");
  }
};

export const UserLogout = (formValues) => async (dispatch, getState) => {
  const config = {
    headers: { Authorization: `Bearer ${getState().user.user}` },
  };
  await api.post("/users/logout", {}, config);

  dispatch({ type: LOGOUT });
};
