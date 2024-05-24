import styles from "./ListItem.module.css";

export default function ListItem({todo}) {
  const className = todo.isComplete ? styles.strikeThrough : "";

  function handleClick() {
    todo.isComplete = !todo.isComplete;
  }

  return (
    <li>
      <span className={className}>{todo.description}</span>{" "}
      <button onClick={handleClick}>Toggle</button>
    </li>
  );
}
