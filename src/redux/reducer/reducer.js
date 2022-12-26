import { actionTypes } from "../constants/actionTypes";

const initState = {
  task: [
    {
      id: 1,
      task: "Buy groceries for next week",
      status: "status 1",
    },
    {
      id: 2,
      task: "Renew car insurance",
      status: "status 2",
    },
    {
      id: 3,
      task: "Sign up for online course",
      status: "status 3",
    },
  ],
};

export const setTask = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        task: [...state.task, payload],
      };
    default:
      return state;
  }
};
