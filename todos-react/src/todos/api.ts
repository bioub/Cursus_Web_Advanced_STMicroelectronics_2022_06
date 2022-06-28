import { Todo, TodoDto } from './Todo';

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('http://localhost:4000/api/todos');
  return await res.json();
}

export async function postTodo(todo: TodoDto): Promise<Todo> {
  const res = await fetch('http://localhost:4000/api/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return await res.json();
}
