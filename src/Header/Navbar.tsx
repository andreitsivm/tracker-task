import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";

const Header = styled.header`
  width: 100%;
  background-color: #00e676;
  height: 60px;
  display: flex;
  align-items: center;
  h1 {
    text-align: center;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Container></Container>
    </Header>
  );
};

export default Navbar;
