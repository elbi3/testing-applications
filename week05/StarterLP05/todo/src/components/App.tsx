import { useState, FormEvent } from "react";
import type { Todo } from "@/types";
import { addTodo } from "@/utils/todoUtils";
import TodoItem from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => addTodo(prev, text));
    setText("");
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>

      {/* rentals.map's counterpart — the loop coverage target */}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
