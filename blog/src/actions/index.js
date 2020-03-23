import jsonPlaceHolder from "../apis/JsonPlaceHolder";
import _ from "lodash";
export const fetchPosts = () => {
  return async dispatch => {
    const res = await jsonPlaceHolder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: res.data
    });
  };
};

export const fetchUser = id => {
  return dispatch => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
});
