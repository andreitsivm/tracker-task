import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import "moment-duration-format";

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
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timestamp]);

  useEffect(() => {
    if (!paused) {
      const spendTime = setInterval(() => {
        tick();
      }, 1000);
      return () => clearInterval(spendTime);
    }
  }, [paused, tick]);
  const secInDay = 86400;
  const duration =
    timer < secInDay
      ? moment
          .utc(moment.duration(timer, "seconds").as("milliseconds"))
          .format("HH:mm:ss")
      : moment.duration(timer, "seconds").format("hh:mm:ss");

  return (
    <Item paused={paused}>
      <Name>{name}</Name>
      <Control>
        {duration}
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
