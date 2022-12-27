import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/actions";

const AddTodo = () => {
  const [state, setState] = useState({
    task: "",
  });

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(state));
    setState({ task: "" });
  };

  const updateInput = (input) => {
    setState(input);
  };

  return (
    <div>
      <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
        <div className="col-12">
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              className="form-control"
              onChange={(e) => updateInput(e.target.value)}
              value={state.task}
            />
            <label className="form-label" htmlFor="form1">
              Insertar la tarea aquí
            </label>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-warning">
            Get tasks
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
