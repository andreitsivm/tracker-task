import styled from "styled-components";

export const Item = styled.div<{ paused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  @media (max-width: 560px) {
    height: 100%;
  }
  padding: 8px 8px;
  border-bottom: 1px solid gray;
  background-color: ${(props) => (props.paused ? `#eee` : "#fff")};
  color: ${(props) => (props.paused ? `#000` : "#00e676")};
`;
export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 65%;

  @media (max-width: 560px) {
    max-width: 50%;
  }
`;
export const Control = styled.div`
  display: flex;
  align-items: center;
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 8px;
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
