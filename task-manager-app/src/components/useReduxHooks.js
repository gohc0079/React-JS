import { useSelector, useDispatch } from "react-redux";

const useReduxHooks = (dataObj) => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  dispatch(dataObj);
  return page;
};

export default useReduxHooks;
