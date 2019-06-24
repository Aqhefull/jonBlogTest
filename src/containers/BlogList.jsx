import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchPosts } from "../actions/actionCreator";

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
const BlogListTitle = styled.span`
  color: #3f51b5;
  font-size: 18px;
  display: inline-block;
  padding: 0 0 10px 0;
  &:hover {
    color: #e91e63;
  }
`;

class BlogList extends Component {
  async componentDidMount() {
    const { fetchPosts } = this.props;
    await fetch("https://simple-blog-api.crew.red/posts")
      .then(res => res.json())
      .then(json => fetchPosts(json));
  }

  render() {
    const { blogList } = this.props;
    return (
      <Wrap>
        <Title>Latest Posts</Title>
        {blogList && (
          <ul>
            {blogList.map((el, i) => (
              <li key={el.id}>
                <Link to={`/posts/${el.id}`}>
                  <BlogListTitle>{el.title}</BlogListTitle>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Wrap>
    );
  }
}

export default connect(
  ({ blogList }) => ({
    blogList
  }),
  { fetchPosts }
)(BlogList);
