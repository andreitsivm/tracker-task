import {
  CREATE_TRACKER,
  TrackersActionTypes,
  DELETE_TRACKER,
  PLAY_TRACKER,
  PAUSE_TRACKER,
  Tracker,
  SET_TRACKERS,
  SET_TRACKER_TIME,
} from "./types";

export const createTracker = (
  name: string,
  id: string,
  timestamp: number
): TrackersActionTypes => ({
  type: CREATE_TRACKER,
  payload: { name, id, timestamp },
});
export const setTrackers = (trackers: Array<Tracker>): TrackersActionTypes => ({
  type: SET_TRACKERS,
  payload: trackers,
});
export const deleteTracker = (id: string): TrackersActionTypes => ({
  type: DELETE_TRACKER,
  id,
});
export const playTracker = (
  id: string,
  timestamp: number
): TrackersActionTypes => ({
  type: PLAY_TRACKER,
  id,
  timestamp,
});
export const pauseTracker = (
  id: string,
  time: number
): TrackersActionTypes => ({
  type: PAUSE_TRACKER,
  id,
  time,
});
