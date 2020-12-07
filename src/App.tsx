import React from "react";
import styled from "styled-components";

import AddTracker from "./AddTracker/AddTracker";
import Container from "./Container/Container";
import Navbar from "./Header/Navbar";
import Trackers from "./Trackers/Trackers";

const Layout = styled.div`
  height: 100%;
  margin: 0 auto;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Logo>tracker</Logo>
        <AddTracker />

        <Trackers />
      </Container>
    </Layout>
  );
};

export default App;
