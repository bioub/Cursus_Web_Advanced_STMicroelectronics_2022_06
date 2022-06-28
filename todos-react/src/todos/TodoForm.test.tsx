import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

test('renders', () => {
  const newTodo = 'XYZ';
  const handleNewTodoChange = jest.fn();
  const handleAdd = jest.fn();
  render(
    <TodoForm
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
      onAdd={handleAdd}
    />,
  );
});

test('renders newTodo', () => {
  const newTodo = 'XYZ';
  const handleNewTodoChange = jest.fn();
  const handleAdd = jest.fn();
  render(
    <TodoForm
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
      onAdd={handleAdd}
    />,
  );
  expect(screen.getByDisplayValue('XYZ')).toBeInTheDocument();
});

test('calls onNewTodoChange', () => {
  const newTodo = 'XYZ';
  const handleNewTodoChange = jest.fn();
  const handleAdd = jest.fn();
  render(
    <TodoForm
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
      onAdd={handleAdd}
    />,
  );
  const inputEl = screen.getByDisplayValue<HTMLInputElement>('XYZ');

  fireEvent.change(inputEl, { target: { value: 'ABC' } });

  expect(handleNewTodoChange).toHaveBeenCalledWith('ABC');
});

test('calls onAdd', () => {
  const newTodo = 'XYZ';
  const handleNewTodoChange = jest.fn();
  const handleAdd = jest.fn();
  render(
    <TodoForm
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
      onAdd={handleAdd}
    />,
  );

  // screen.debug();

  const formEl = screen.getByTestId('form');

  fireEvent.submit(formEl);

  expect(handleAdd).toHaveBeenCalledWith();
});
