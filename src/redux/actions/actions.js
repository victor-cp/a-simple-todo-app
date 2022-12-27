import { actionTypes } from "../constants/actionTypes";

let id = 0;
let completed = true;
export const addTodo = (todo) => {
  ++id;
  return {
    type: actionTypes.ADD_TODO,
    payload: { task: todo, id },
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: id,
  };
};

export const finishedTodo = (id) => {
  return {
    type: actionTypes.FINISHED_TODO,
    payload: id,
  };
};
