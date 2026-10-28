import type { Todo } from "@/types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li>
      <label style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;