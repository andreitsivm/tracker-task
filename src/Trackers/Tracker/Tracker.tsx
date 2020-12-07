import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";

import {
  MdHighlightOff as Delete,
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Play,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteTracker,
  pauseTracker,
  playTracker,
} from "../../store/trackers/action";
import { Item, Name, Control } from "./Tracker.elements";
import { Tracker as Props } from "../../store/trackers/types";

const Tracker: React.FC<Props> = ({ name, timestamp, id, paused, time }) => {
  const dispatch = useDispatch();

  const [timer, setTimer] = useState<number>(time);

  const tick = useCallback(() => {
    setTimer(timer + parseInt(moment().format("X")) - timestamp);
  }, [timestamp]);

  useEffect(() => {
    if (!paused) {
      const spendTime = setInterval(() => {
        tick();
      }, 1000);
      return () => clearInterval(spendTime);
    }
  }, [paused, tick]);

  return (
    <Item>
      <Name>{name}</Name>
      <Control>
        {timer}
        {paused ? (
          <Play
            className="icon play"
            onClick={() => {
              dispatch(playTracker(id, parseInt(moment().format("X"))));
            }}
          />
        ) : (
          <Pause
            className="icon pause"
            onClick={() => {
              dispatch(pauseTracker(id, timer));
            }}
          />
        )}
        <Delete
          className="icon delete"
          onClick={() => dispatch(deleteTracker(id))}
        />
      </Control>
    </Item>
  );
};

export default Tracker;
