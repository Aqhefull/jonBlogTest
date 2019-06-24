import { FETCH_CURRENT_POST_SUCCESS } from "../constants";

const initialState = {};

export default (state = initialState, { type, post }) => {
  switch (type) {
    case FETCH_CURRENT_POST_SUCCESS:
      return post;
    default:
      return state;
  }
};
