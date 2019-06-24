import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCurrentPost } from "../actions/actionCreator";

import CommentBox from "../components/CommentBox";
import CommentAdd from "../components/CommentAdd";

import styled from "styled-components";

const Wrap = styled.div`
  background: #eaeaea;
  padding: 40px;
  border: 20px solid #e91e63;
  margin: 60px;
`;
const Title = styled.h2`
  color: #e91e63;
  font-size: 22px;
  margin: 0 0 15px 0;
`;
const Description = styled.p`
  color: #000;
  font-size: 16px;
`;
const PostWrap = styled.div`
  background-color: #ccc;
  padding: 20px;
`;
class PostSingle extends Component {
  async getCurrentPost(props) {
    const {
      fetchCurrentPost,
      match: {
        params: { postId: postRouterId }
      }
    } = props;
    await fetch(
      `https://simple-blog-api.crew.red/posts/${postRouterId}?_embed=comments`
    )
      .then(res => res.json())
      .then(json => fetchCurrentPost(json));
  }
  componentDidMount() {
    this.getCurrentPost(this.props);
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPost } = this.props;
    if (currentPost !== prevProps.currentPost) {
      this.getCurrentPost(this.props);
    }
  }
  render() {
    const { currentPost } = this.props;
    const comments = currentPost.comments;
    return (
      <Wrap>
        <Link to="/">Go Home</Link>
        {currentPost && (
          <>
            <PostWrap>
              <Title>{currentPost.title}</Title>
              <Description>{currentPost.body}</Description>
            </PostWrap>
            {comments && comments.length > 0 ? (
              <CommentBox comments={comments} />
            ) : null}
            <CommentAdd />
          </>
        )}
      </Wrap>
    );
  }
}

export default withRouter(
  connect(
    ({ currentPost }) => ({
      currentPost
    }),
    { fetchCurrentPost }
  )(PostSingle)
);
