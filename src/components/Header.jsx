import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #fff;
`;

const HeaderWrap = styled.header`
  background: #3f51b5;
  padding: 15px;
  @media (min-width: 768px) {
    padding: 60px;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Title>
        Jon <span style={{ color: "#e91e63" }}>Blog</span> Test - Hello here!
      </Title>
    </HeaderWrap>
  );
};

export default Header;
