import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import blogList from "../reducers/blogList";
import currentPost from "../reducers/currentPost";

export default history =>
  combineReducers({
    router: connectRouter(history),
    blogList,
    currentPost
  });
