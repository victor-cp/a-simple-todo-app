import React from "react";
import Todo from "../Todo";
import AddTodo from "../AddTodo";

import { useSelector } from "react-redux";

const TodoList = () => {
  const todoTasks = useSelector((state) => state.reducerSetTask.task);
  const stateTask = useSelector((state) => state.reducerSetTask.byIds);

  return (
    <div className="col col-lg-9 col-xl-7">
      <div className="card rounded-3">
        <div className="card-body p-4">
          <AddTodo />

          <table className="table mb-4">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Todo item</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <Todo todoTasks={todoTasks} stateTask={stateTask} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
