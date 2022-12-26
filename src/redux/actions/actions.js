import { actionTypes } from "../constants/actionTypes";

export const addTodo = (task) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: task,
  };
};
