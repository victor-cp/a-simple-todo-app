import { combineReducers } from "redux";
import { setTask } from "./reducer";

const reducers = combineReducers({
  reducerSetTask: setTask,
});
export default reducers;
