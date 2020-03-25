import jsonPlaceHolder from "../apis/JsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //dispatch a inner function to redux to invoke it
  //using await to wait for the response of the API to arrive
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  /*Above line of codes is equivalent = const uniqueUserIds = getState().posts.map(userid => {
    return userid.userId;
  });
  const userIds = uniqueUserIds.filter((item, index) => {
    return uniqueUserIds.indexOf(item) === index;
  });
  OR 
  const userIds = [...new Set(getState().posts)]
  */

  //no need to put await as there is no logic after the line, we dont care about how long the user takes to return
  userIds.forEach(id => dispatch(fetchUser(id)));

  //(extra codes)
  //getState().posts is passed into map behind the scene
  // _.chain(getState().posts)
  //   .map("userId")
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};

export const fetchPosts = () => {
  return async dispatch => {
    const res = await jsonPlaceHolder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: res.data
    });
  };
};

export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
};
// export const fetchUser = id => {
//   return dispatch => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data
//   });
// });
