import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Node", completed: true },
    { id: 3, title: "Learn JavaScript", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
