import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./containers/TodoList/TodoList";
import Header from "./containers/Header";

function App() {
  return (
    <div className="vh-100 bg-light">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<TodoList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
