import React from "react";

import { useSelector } from "react-redux";

const TodoList = () => {
  const todoTasks = useSelector((state) => state.reducerSetTask.task);

  return (
    <div className="col col-lg-9 col-xl-7">
      <div className="card rounded-3">
        <div className="card-body p-4">
          <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
            <div className="col-12">
              <div className="form-outline">
                <input type="text" id="form1" className="form-control" />
                <label className="form-label" htmlFor="form1">
                  Insertar la tarea aquí
                </label>
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-warning">
                Get tasks
              </button>
            </div>
          </form>

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
              {todoTasks.map((task) => {
                return (
                  <tr key={task.id}>
                    <th scope="row">{task.id}</th>
                    <td>{task.task}</td>
                    <td>{task.status}</td>
                    <td>
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                      <button type="submit" className="btn btn-success ms-1">
                        Finished
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
