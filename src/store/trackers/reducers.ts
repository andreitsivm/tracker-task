import {
  TrackersState,
  TrackersActionTypes,
  CREATE_TRACKER,
  DELETE_TRACKER,
  PAUSE_TRACKER,
  PLAY_TRACKER,
  SET_TRACKERS,
} from "./types";

const initialState: TrackersState = {
  trackers: [],
};

export const trackersReducer = (
  state = initialState,
  action: TrackersActionTypes
): TrackersState => {
  switch (action.type) {
    case SET_TRACKERS: {
      return {
        trackers: action.payload,
      };
    }
    case CREATE_TRACKER:
      return {
        trackers: [
          { ...action.payload, time: 0, paused: false },
          ...state.trackers,
        ],
      };
    case DELETE_TRACKER:
      return {
        trackers: state.trackers.filter((tracker) => tracker.id !== action.id),
      };
    case PLAY_TRACKER:
      return {
        trackers: state.trackers.map((tracker, index) => {
          if (
            index ===
            state.trackers.findIndex((tracker) => tracker.id === action.id)
          ) {
            return { ...tracker, paused: false, timestamp: action.timestamp };
          } else return tracker;
        }),
      };
    case PAUSE_TRACKER:
      return {
        trackers: state.trackers.map((tracker, index) => {
          if (
            index ===
            state.trackers.findIndex((tracker) => tracker.id === action.id)
          ) {
            return {
              ...tracker,
              time: action.time,
              paused: true,
            };
          } else return tracker;
        }),
      };
    default:
      return state;
  }
};
