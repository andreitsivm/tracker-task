import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Content } from "./Trackers.elements";
import { RootState } from "../store/root.reducer";
import { setTrackers } from "../store/trackers/action";
import Tracker from "./Tracker/Tracker";

const storage = "trackers";

const Trackers = () => {
  const dispatch = useDispatch();
  const trackers = useSelector((state: RootState) => state.track.trackers);

  useEffect(() => {
    const data = localStorage.getItem(storage);
    if (data !== null) {
      dispatch(setTrackers(JSON.parse(data)));
    }
    localStorage.removeItem(storage);
    return () => {
      localStorage.setItem(storage, JSON.stringify([...trackers]));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (trackers.length === 0) {
    return (
      <Empty>
        <p>List is empty</p>
      </Empty>
    );
  }
  return (
    <Content>
      {trackers.map((tracker) => (
        <Tracker
          key={tracker.id}
          paused={tracker.paused}
          name={tracker.name}
          time={tracker.time}
          timestamp={tracker.timestamp}
          id={tracker.id}
        />
      ))}
    </Content>
  );
};

export default Trackers;
