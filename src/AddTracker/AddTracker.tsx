import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";
import moment from "moment";

import { MdPlayCircleFilled as Play } from "react-icons/md";
import { useDispatch } from "react-redux";

import { createTracker } from "../store/trackers/action";

const Field = styled.div`
  margin-top: 30px;
  border: 1px solid gray;
  border-radius: 40px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 560px) {
    width: 100%;
  }
`;
const Input = styled.input`
  background-color: #fff;
  padding: 0 16px;
  flex: 1;
  outline: none;
  border: none;
  border-radius: 30px;
  height: 100%;
`;
const PlayBtn = styled.div`
  display: flex;
  align-items: center;
  .play {
    color: #00e676;
    width: 2.5rem;
    height: 2.5rem;
    @media (max-width: 560px) {
      width: 2rem;
      height: 2rem;
    }
  }
  .play:hover {
    color: #00c853;
  }
`;

const AddTracker = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleCreate = () => {
    const id = shortid.generate();
    const timestamp = parseInt(moment().format("X"));
    if (name === "") {
      dispatch(
        createTracker(
          `No name tracker ${moment().format("DD MM YYYY, hh:mm:ss")}`,
          id,
          timestamp
        )
      );
      return;
    }
    dispatch(createTracker(name, id, timestamp));
    setName("");
  };

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  return (
    <Field>
      <Input
        type="text"
        placeholder="Enter tracker name"
        value={name}
        onChange={handleInput}
        onKeyDown={keyPress}
      />
      <PlayBtn onClick={handleCreate}>
        <Play className="play" />
      </PlayBtn>
    </Field>
  );
};

export default AddTracker;
