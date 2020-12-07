import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
const Content = styled.div`
  margin: 0 auto;
  width: 560px;
  @media (max-width: 560px) {
    min-width: 320px;
  }
`;

const Container: React.FC<Props> = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Container;
