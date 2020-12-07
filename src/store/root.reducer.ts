import { combineReducers } from "redux";
import { trackersReducer } from "./trackers/reducers";

export const rootReducer = combineReducers({ track: trackersReducer });

export type RootState = ReturnType<typeof rootReducer>;
