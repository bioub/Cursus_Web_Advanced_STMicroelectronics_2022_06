import { Todo } from "./Todo";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('http://localhost:4000/api/todos');
  return await res.json();
}
