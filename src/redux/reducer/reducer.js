import { actionTypes } from "../constants/actionTypes";

const initState = {
  task: [],
  byIds: {},
};

export const setTask = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        task: [...state.task, payload],
        byIds: {
          ...state.byIds,
          [payload.id]: { completed: true },
        },
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        task: state.task.filter((task) => {
          return task.id !== payload;
        }),
      };
    case actionTypes.FINISHED_TODO:
      const task1 = state;

      console.log(task1);

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [payload]: {
            completed: !state.byIds[payload].completed,
          },
        },
      };
    default:
      return { ...state };
  }
};
