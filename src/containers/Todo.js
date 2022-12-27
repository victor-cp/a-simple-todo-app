import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, finishedTodo } from "../redux/actions/actions";

const Todo = ({ todoTasks, stateTask }) => {
  //   const [status, setStatus] = useState("In progress");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleFinished = (id) => {
    // if (status === "Done") setStatus("In progress");
    // else setStatus("Done");
    dispatch(finishedTodo(id));
  };

  const status = (stat) => {
    console.log(stat);
    return stat.completed ? "in progress" : "completed";
  };

  return (
    <>
      {todoTasks.map((task) => {
        return (
          <tr key={task.id}>
            <th scope="row">{task.id}</th>
            <td>{task.task}</td>
            <td>{status(stateTask[task.id])}</td>
            <td>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
              <button
                type="submit"
                className="btn btn-success ms-1"
                onClick={() => handleFinished(task.id)}
              >
                Finished
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Todo;
