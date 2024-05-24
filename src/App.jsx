import { initialTodos } from "./initialTodos";
import ListItem from "./components/ListItem";
import styles from "./App.module.css";

export default function App() {
  const darkMode = false;

  return (
    <div>
      {darkMode ? "Dark mode on" : <h2 className={styles.header}>Todo List</h2>}
      <div>
        <ul>
          {initialTodos.map(function(todo) { return (<ListItem key={todo._id} todo={todo} />)})}
        </ul>
      </div>
    </div>
  );
}
