// src/utils/todoUtils.ts
import type { Todo } from "@/types";

// Pure function — no React, no rendering. This is the statement/branch
// coverage target: one branch for blank input, one for real input.
export function addTodo(todos: Todo[], text: string): Todo[] {
  const trimmed = text.trim();

  if (!trimmed) {
    return todos;
  }

  return [...todos, { id: Date.now(), text: trimmed, done: false }];
}
