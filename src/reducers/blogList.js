import { FETCH_POSTS_SUCCESS } from "../constants";

const initialState = [];

export default (state = initialState, { type, posts }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return [...posts];
    default:
      return state;
  }
};
