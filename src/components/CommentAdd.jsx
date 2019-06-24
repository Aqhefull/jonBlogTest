import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
const Title = styled.h5`
  color: #3f51b5;
  margin: 30px 0 0 0;
`;
const CommentAddBox = styled.textarea`
  background-color: #29434e;
  border: 5px solid #718792;
  color: #fff;
  padding: 15px;
  margin: 20px 0;
  width: 100%;
`;
const Button = styled.button`
  display: flex
  justify-content: center
  align-items: stretch
  background-color: #455a64
  color: #fff
  text-transform: uppercase
  border: 0
  outline: none
  border-radius: 3px
  margin: 0
  transition: all 0.3s
  font-size: 16px
  padding: 10px
  cursor: pointer
  &:hover {
    background-color: #e91e63;
  }
`;

const CommentAdd = ({
  comments,
  match: {
    params: { postId: postRouterId }
  }
}) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const updateTextAreaValue = e => {
    console.log(textAreaValue);
    return setTextAreaValue(e.target.value);
  };

  const handleClick = e => {
    fetch("https://simple-blog-api.crew.red/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postId: +postRouterId,
        body: textAreaValue
      })
    }).then(() => setTextAreaValue(""));
  };
  return (
    <>
      <Title>Add Comment</Title>
      <CommentAddBox onChange={updateTextAreaValue} value={textAreaValue} />
      <Button onClick={handleClick}>Submit</Button>
    </>
  );
};

export default withRouter(CommentAdd);
