import { FormEvent } from 'react';

type Props = {
  readonly newTodo: string;
  onNewTodoChange(newTodo: string): void;
  onAdd(): void;
};

function TodoForm({ newTodo, onNewTodoChange, onAdd }: Props) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAdd();
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => onNewTodoChange(e.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
