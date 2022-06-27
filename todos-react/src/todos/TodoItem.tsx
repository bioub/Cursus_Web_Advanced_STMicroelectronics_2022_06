import { Todo } from "./Todo";

type Props = {
  readonly todo: Todo
};

function TodoItem({ todo }: Props) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button>-</button>
    </div>
  );
}

export default TodoItem;
