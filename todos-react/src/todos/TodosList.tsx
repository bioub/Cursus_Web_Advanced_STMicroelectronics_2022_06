import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props = {
  readonly todos: Todo[];
};

function TodosList({ todos }: Props) {
  return (
    <div className="TodosList">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

export default TodosList;
