import api from "../api";
import { REGISTER, LOGIN, LOGOUT, CREATE_TASK } from "../constants/constants";
import history from "../history";

const apiHeaders = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

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

export const UserLogout = () => async (dispatch, getState) => {
  const config = apiHeaders(getState().user.user);
  await api.post("/users/logout", {}, config);

  dispatch({ type: LOGOUT });
};

export const createTask = (formValues) => async (dispatch, getState) => {
  console.log(getState().user.user);
  const config = {
    headers: {
      ...apiHeaders(getState().user.user).headers,
    },
  };
  await api.post("/tasks", formValues, config);
  dispatch({ type: CREATE_TASK });
};
