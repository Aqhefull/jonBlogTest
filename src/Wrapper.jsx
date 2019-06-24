import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Wrap = styled.div`
  background: #eaeaea;
`;

const Wrapper = ({ children }) => {
  return (
    <Wrap>
      <Header />
      {children}
      <Footer />
    </Wrap>
  );
};
export default Wrapper;
