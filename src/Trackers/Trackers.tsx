import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Empty, Content } from "./Trackers.elements";
import { RootState } from "../store/root.reducer";
import { setTrackers } from "../store/trackers/action";
import Tracker from "./Tracker/Tracker";

const mapState = (state: RootState) => ({
  trackers: state.track.trackers,
});

const mapDispatch = {
  setTrackers,
};
const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;

class Trackers extends React.Component<PropsFromRedux> {
  constructor(props: PropsFromRedux) {
    super(props);
    this.componentCleanup = this.componentCleanup.bind(this);
  }
  componentCleanup() {
    localStorage.removeItem("storage");
    localStorage.setItem("storage", JSON.stringify([...this.props.trackers]));
  }

  componentDidMount() {
    const data = localStorage.getItem("storage");
    if (data !== null) {
      this.props.setTrackers(JSON.parse(data));
    }
    window.addEventListener("beforeunload", this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener("beforeunload", this.componentCleanup);
  }

  render() {
    const { trackers } = this.props;
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
  }
}

export default connector(Trackers);
