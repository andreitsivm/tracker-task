import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 5px;
  border-bottom: 1px solid gray;
`;
export const Name = styled.div``;
export const Control = styled.div`
  display: flex;
  align-items: center;
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .play {
    color: #2196f3;
  }
  .pause {
    color: #ff6f00;
  }
  .delete {
    color: #d50000;
  }
`;
