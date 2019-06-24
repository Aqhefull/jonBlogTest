import React from "react";
import styled from "styled-components";

const CopyRight = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: #3f51b5;
`;

const FooterWrap = styled.footer`
  padding: 15px;
  background: #d2d2fd;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <CopyRight>By Alex Komarevich 2019</CopyRight>
    </FooterWrap>
  );
};

export default Footer;
