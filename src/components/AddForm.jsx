import { useState } from "react";

export default function AddForm({ addTodo }) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(inputText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value.toUpperCase())}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
