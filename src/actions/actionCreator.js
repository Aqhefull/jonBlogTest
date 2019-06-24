import { FETCH_POSTS_SUCCESS, FETCH_CURRENT_POST_SUCCESS } from "../constants";

export const fetchPosts = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

export const fetchCurrentPost = post => ({
  type: FETCH_CURRENT_POST_SUCCESS,
  post
});
