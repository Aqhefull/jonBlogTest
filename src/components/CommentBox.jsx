import React from "react";
import styled from "styled-components";
const Comments = styled.div`
  background-color: #ccc;
  border: 5px solid #e91e63;
  padding: 20px;
  margin: 20px 0;
`;
const Comment = styled.div`
  background-color: #718792;
  border: 2px solid #29434e;
  padding: 20px;
  margin: 20px 0;
`;
const CommentText = styled.p`
  color: #000;
`;
const CommentBox = ({ comments }) => {
  return (
    <Comments>
      {comments.map((el, i) => (
        <Comment key={el.id}>
          <CommentText>{el.body}</CommentText>
        </Comment>
      ))}
    </Comments>
  );
};

export default CommentBox;
