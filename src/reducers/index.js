import playerTurnReducer from "./player-turn-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  xIsNext: playerTurnReducer
});

export default rootReducer;
