export interface Todo {
  _id: string;
  title: string;
  completed: boolean
}

export type TodoDto = Omit<Todo, '_id'>;
