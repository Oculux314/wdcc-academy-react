import styles from "./ListItem.module.css";

export default function ListItem({ todo, handleToggle }) {
  const className = todo.isComplete ? styles.strikeThrough : "";

  function handleClick() {
    handleToggle(todo._id);
  }

  return (
    <li>
      <span className={className}>{todo.description}</span>{" "}
      <button onClick={handleClick}>Toggle</button>
    </li>
  );
}
