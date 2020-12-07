export const CREATE_TRACKER = "CREATE_TRACKER";
export const DELETE_TRACKER = "DELETE_TRACKER";
export const PLAY_TRACKER = "PLAY_TRACKER";
export const PAUSE_TRACKER = "PAUSE_TRACKER";
export const SET_TRACKERS = "SET_TRACKERS";
export const SET_TRACKER_TIME = "SET_TRACKER_TIME";

interface CreateTrackerAction {
  type: typeof CREATE_TRACKER;
  payload: { name: string; id: string; timestamp: number };
}
interface SetTrackersAction {
  type: typeof SET_TRACKERS;
  payload: Array<Tracker>;
}
interface DeleteTrackerAction {
  type: typeof DELETE_TRACKER;
  id: string;
}
interface PauseTrackerAction {
  type: typeof PAUSE_TRACKER;
  id: string;
  time: number;
}
interface PlayTrackerAction {
  type: typeof PLAY_TRACKER;
  id: string;
  timestamp: number;
}

export type TrackersActionTypes =
  | CreateTrackerAction
  | DeleteTrackerAction
  | PauseTrackerAction
  | PlayTrackerAction
  | SetTrackersAction;

export interface Tracker {
  id: string;
  name: string;
  paused: boolean;
  time: number;
  timestamp: number;
}

export interface TrackersState {
  trackers: Array<Tracker>;
}
