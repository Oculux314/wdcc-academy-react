import { useState } from "react";
import styles from "./App.module.css";
import AddForm from "./components/AddForm";
import ListItem from "./components/ListItem";
import { initialTodos } from "./initialTodos";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  console.log(todos);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const toggleTodoComplete = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo._id === todoId) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addTodo = function (description) {
    const newTodo = {
      _id: todos.length + 1,
      description,
      isComplete: false,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      {darkMode ? "Dark mode on" : <h2 className={styles.header}>Todo List</h2>}
      <div>
        <ul>
          {todos.map(function (todo) {
            return (
              <ListItem
                key={todo._id}
                todo={todo}
                handleToggle={toggleTodoComplete}
              />
            );
          })}
        </ul>
      </div>
      <AddForm addTodo={addTodo} />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
