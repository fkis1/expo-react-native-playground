import { createStore } from "redux";
import { rootReducer, IRootState } from "src/state/ducks";

export const configureStore = (initialState?: IRootState) =>
  createStore(rootReducer, initialState);
