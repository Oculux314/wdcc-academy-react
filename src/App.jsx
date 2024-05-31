import { initialTodos } from "./initialTodos";
import ListItem from "./components/ListItem";
import styles from "./App.module.css";
import { useState } from "react";

// React internals
// let darkMode = true;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);

    // darkMode = !darkMode;
    // console.log(darkMode)
    // root.render(
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>
    // );
  }

  return (
    <div>
      {darkMode ? "Dark mode on" : <h2 className={styles.header}>Todo List</h2>}
      <div>
        <ul>
          {initialTodos.map(function(todo) { return (<ListItem key={todo._id} todo={todo} />)})}
        </ul>
      </div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
